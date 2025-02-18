"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore"
import { db } from "@/firebase"
import { useAuth } from "@/app/context/AuthContext"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Heart, Reply, Trash2, Send } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Comment {
  id: string
  name: string
  email: string
  comment: string
  timestamp: any
  userId: string
  likes: string[]
  parentId?: string
  blogId: string
}

interface CommentsSectionProps {
  blogId: string
}

const CommentsSection = ({ blogId }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" })
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const { user } = useAuth() // You'll need to implement authentication context

  useEffect(() => {
    // Subscribe to comments in real-time
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((comment: any) => comment.blogId === blogId) as Comment[]
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
    // if (!user) {
    //   alert("Please sign in to comment")
    //   return
    // }

    if (formData.comment.trim()) {
      try {
        await addDoc(collection(db, "comments"), {
          name: formData.name || "Anonymous", // Use formData.name or default to "Anonymous"
          email: formData.email || "no-email@example.com", // Use formData.email or a default
          comment: formData.comment,
          timestamp: new Date(),
          userId: "anonymous-user", // Use a placeholder for userId
          likes: [],
          parentId: parentId || null,
          blogId,
        });
  
        setFormData({ ...formData, comment: "" }); // Clear the comment field
        setReplyTo(null); // Reset replyTo state
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };
  const handleLike = async (commentId: string) => {
    if (!user) {
      alert("Please sign in to like comments")
      return
    }

    const commentRef = doc(db, "comments", commentId)
    const comment = comments.find((c) => c.id === commentId)

    if (comment) {
      const newLikes = comment.likes.includes(user.uid)
        ? comment.likes.filter((id) => id !== user.uid)
        : [...comment.likes, user.uid]

      await updateDoc(commentRef, { likes: newLikes })
    }
  }

  const handleDelete = async (commentId: string) => {
    if (!user) return

    const comment = comments.find((c) => c.id === commentId)
    if (comment?.userId === user.uid) {
      if (window.confirm("Are you sure you want to delete this comment?")) {
        await deleteDoc(doc(db, "comments", commentId))
      }
    }
  }

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => {
    const isAuthor = user?.uid === comment.userId
    const hasLiked = user && comment.likes.includes(user.uid)

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
              {!isReply && (
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
              {isAuthor && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 text-red-500"
                  onClick={() => handleDelete(comment.id)}
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
        <Textarea
          name="comment"
          placeholder={replyTo ? "Write a reply..." : "Write a comment..."}
          value={formData.comment}
          onChange={handleInputChange}
          className="min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button type="submit" className="flex items-center space-x-2">
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
                    <Textarea
                      name="comment"
                      placeholder="Write your reply..."
                      value={formData.comment}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setReplyTo(null)}>
                        Cancel
                      </Button>
                      <Button type="submit">Reply</Button>
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

