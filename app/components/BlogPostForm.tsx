"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BlogPostFormProps {
  postId?: string
}

export default function BlogPostForm({ postId }: BlogPostFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [slug, setSlug] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        const docRef = doc(db, "posts", postId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const data = docSnap.data()
          setTitle(data.title)
          setDescription(data.description)
          setContent(data.content)
          setSlug(data.slug)
        }
      }
      fetchPost()
    }
  }, [postId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const postData = {
      title,
      description,
      content,
      slug,
      date: new Date().toISOString(),
    }
    const docRef = doc(db, "posts", postId || slug)
    await setDoc(docRef, postData, { merge: true })
    router.push("/admin")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <Input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" required />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content (Markdown)"
        required
        rows={10}
      />
      <Button type="submit">{postId ? "Update" : "Create"} Post</Button>
    </form>
  )
}

