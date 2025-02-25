"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, query, orderBy, where } from "firebase/firestore"
import { db } from "@/firebase"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Heart, Reply, Trash2, Send } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Comment {
  id: string
  name: string
  comment: string
  timestamp: any
  likes: string[]
  parentId?: string
  blogId: string
  userId: string
  approved: boolean | null
}

interface User {
  id: string
  name: string
  isAdmin: boolean
}

interface CommentsSectionProps {
  blogId: string
  currentUser?: User
}

const CommentsSection = ({ blogId, currentUser }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [formData, setFormData] = useState({ name: "", comment: "" })
  const [replyTo, setReplyTo] = useState<string | null>(null)

  useEffect(() => {
    const q = query(collection(db, "comments"), where("blogId", "==", blogId), orderBy("timestamp", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Comment[]
      setComments(commentsData)
    })

    return () => unsubscribe()
  }, [blogId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent, parentId?: string) => {
    e.preventDefault()

    if (formData.comment.trim()) {
      try {
        await addDoc(collection(db, "comments"), {
          name: formData.name || "Anonymous",
          comment: formData.comment,
          timestamp: new Date(),
          likes: [],
          parentId: parentId || null,
          blogId,
          userId: currentUser?.id || "anonymous",
          approved: null,
        })

        setFormData({ ...formData, comment: "" })
        setReplyTo(null)
      } catch (error) {
        console.error("Error adding comment:", error)
      }
    }
  }

  const handleLike = async (commentId: string) => {
    const commentRef = doc(db, "comments", commentId)
    const comment = comments.find((c) => c.id === commentId)

    if (comment) {
      const newLikes = comment.likes.includes(commentId)
        ? comment.likes.filter((id) => id !== commentId)
        : [...comment.likes, commentId]

      await updateDoc(commentRef, { likes: newLikes })
    }
  }

  const handleDelete = async (commentId: string, commentUserId: string) => {
    const canDelete = currentUser?.isAdmin || commentUserId === currentUser?.id

    if (!canDelete) {
      alert("You don't have permission to delete this comment")
      return
    }

    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        await deleteDoc(doc(db, "comments", commentId))
      } catch (error) {
        console.error("Error deleting comment:", error)
        alert("Failed to delete comment")
      }
    }
  }

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => {
    const hasLiked = comment.likes.includes(comment.id)
    const isOwnComment = comment.userId === currentUser?.id
    const isPending = comment.approved === null
    const isApproved = comment.approved === true

    if (!isApproved && !isOwnComment) return null

    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm ${isReply ? "ml-8" : ""}`}
      >
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.name}`} />
            <AvatarFallback>{comment.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">{comment.name}</h4>
              <span className="text-sm text-gray-500">
                {formatDistanceToNow(comment.timestamp.toDate(), { addSuffix: true })}
              </span>
            </div>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{comment.comment}</p>
            {isPending && isOwnComment && <div className="text-yellow-500 text-sm mt-2">Pending approval</div>}
            <div className="mt-2 flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center space-x-1 ${hasLiked ? "text-red-500" : ""}`}
                onClick={() => handleLike(comment.id)}
              >
                <Heart className="w-4 h-4" />
                <span>{comment.likes.length}</span>
              </Button>
              {!isReply && isApproved && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1"
                  onClick={() => setReplyTo(comment.id)}
                >
                  <Reply className="w-4 h-4" />
                  <span>Reply</span>
                </Button>
              )}
              {(currentUser?.isAdmin || comment.userId === currentUser?.id) && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 text-red-500"
                  onClick={() => handleDelete(comment.id, comment.userId)}
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  const mainComments = comments.filter((comment) => !comment.parentId)
  const getCommentReplies = (commentId: string) => comments.filter((comment) => comment.parentId === commentId)

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        <Input name="name" placeholder="Your name (optional)" value={formData.name} onChange={handleInputChange} />
        <Textarea
          name="comment"
          placeholder={replyTo ? "Write a reply..." : "Write a comment..."}
          value={formData.comment}
          onChange={handleInputChange}
          className="min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button type="submit" className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white">
            <Send className="w-4 h-4" />
            <span>{replyTo ? "Reply" : "Comment"}</span>
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <AnimatePresence>
        <div className="space-y-4">
          {mainComments.map((comment) => (
            <div key={comment.id} className="space-y-4">
              <CommentItem comment={comment} />

              {/* Replies */}
              {getCommentReplies(comment.id).map((reply) => (
                <CommentItem key={reply.id} comment={reply} isReply />
              ))}

              {/* Reply Form */}
              {replyTo === comment.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="ml-8"
                >
                  <form onSubmit={(e) => handleSubmit(e, comment.id)} className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Your name (optional)"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <Textarea
                      name="comment"
                      placeholder="Write your reply..."
                      value={formData.comment}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setReplyTo(null)}
                        className="bg-red-500 hover:bg-red-600 text-white"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">
                        Reply
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}

export default CommentsSection

