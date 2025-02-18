"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
import { slugify } from "../utils/slugify"

interface BlogPostFormProps {
  postId?: string
}

export default function BlogPostForm({ postId }: BlogPostFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [slug, setSlug] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState("")
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
          setImageUrl(data.imageUrl || "")
        }
      }
      fetchPost()
    }
  }, [postId])

  // Automatically generate slug when title changes
  useEffect(() => {
    if (title) {
      setSlug(slugify(title))
    }
  }, [title])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let uploadedImageUrl = imageUrl

    if (image) {
      const formData = new FormData()
      formData.append("file", image)
      formData.append("upload_preset", "ml_default") // Replace with your Cloudinary upload preset

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      )

      const data = await response.json()
      uploadedImageUrl = data.secure_url
    }

    const postData = {
      title,
      description,
      content,
      slug,
      imageUrl: uploadedImageUrl,
      date: new Date().toISOString(),
    }
    const docRef = doc(db, "posts", postId || slug)
    await setDoc(docRef, postData, { merge: true })
    router.push("/admin")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <Input
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Slug"
        required
      />
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
      <Input type="file" onChange={handleImageChange} accept="image/*" />
      {imageUrl && (
        <Image
          src={imageUrl || "/placeholder.svg"}
          width={400}
          height={400}
          alt="Current blog image"
          className="w-full max-w-md mt-4"
        />
      )}
      <Button type="submit">{postId ? "Update" : "Create"} Post</Button>
    </form>
  )
}