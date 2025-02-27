"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

import QuillEditor from "./QuillEditor"
import { slugify } from "../utils/slugify"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface BlogPostFormProps {
  postId?: string
}

export default function BlogPostForm({ postId }: BlogPostFormProps) {
  // Blog Post Content Fields
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [slug, setSlug] = useState("") // Slug stays in Blog Post Content

  // Meta Fields
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [metaKeywords, setMetaKeywords] = useState<string[]>([]) // Array for meta keywords
  const [metaKeywordInput, setMetaKeywordInput] = useState("") // Temporary input for meta keywords

  // Other Fields
  const [image, setImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  // Fetch existing post data if editing
  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        const docRef = doc(db, "posts", postId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const data = docSnap.data()
          // Blog Post Fields
          setTitle(data.title || "")
          setDescription(data.description || "")
          setContent(data.content || "")
          setSlug(data.slug || "")
          // Meta Fields
          setMetaTitle(data.metaTitle || "")
          setMetaDescription(data.metaDescription || "")
          setMetaKeywords(data.metaKeywords || [])
          // Other Fields
          setImageUrl(data.imageUrl || "")
        }
      }
      fetchPost()
    }
  }, [postId])

  // Auto-generate slug from title
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

  const checkSlugExists = async (slug: string) => {
    const docRef = doc(db, "posts", slug)
    const docSnap = await getDoc(docRef)
    return docSnap.exists()
  }

  // Handle adding meta keywords
  const handleAddMetaKeyword = () => {
    if (metaKeywordInput.trim()) {
      setMetaKeywords((prev) => [...prev, metaKeywordInput.trim()])
      setMetaKeywordInput("")
    }
  }

  const handleRemoveMetaKeyword = (index: number) => {
    setMetaKeywords((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Check for slug uniqueness
    if (postId && postId !== slug) {
      const exists = await checkSlugExists(slug)
      if (exists) {
        setError("A post with this slug already exists. Please choose a different title or modify the slug.")
        return
      }
    } else if (!postId) {
      const exists = await checkSlugExists(slug)
      if (exists) {
        setError("A post with this slug already exists. Please choose a different title or modify the slug.")
        return
      }
    }

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

    // Blog post data with slug in content section
    const postData = {
      title,
      description,
      content,
      slug, // Slug is part of blog post content
      imageUrl: uploadedImageUrl,
      date: new Date().toISOString(),
      metaTitle,
      metaDescription,
      metaKeywords, // Array of meta keywords
    }

    const docRef = doc(db, "posts", postId || slug)
    await setDoc(docRef, postData, { merge: true })
    router.push("/admin")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl mx-auto mt-10 mb-10">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Blog Post Content Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Blog Post Content</h2>
        <Input
          type="text"
          value={title}
     
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Post Title"
          required
        />
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Blog Post Description"
          required
        />
        <Input className="" type="text" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug" required />
        <div className="mb-6">
          <QuillEditor  value={content} onChange={setContent} className=" mb-4" />
        
        </div>
      </div>
      {/* Image Upload */}
      <Input required type="file" onChange={handleImageChange} accept="image/*" />
      {imageUrl && (
        <Image
          src={imageUrl || "/placeholder.svg"}
          width={400}
          height={400}
          alt="Current blog image"
          className="w-full max-w-md mt-4"
        />
      )}

      {/* Meta Data Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">SEO Meta Data</h2>
        <Input
          type="text"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          placeholder="Meta Title (for SEO)"
          required
        />
        <Input
          type="text"
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder="Meta Description (for SEO)"
          required
        />
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={metaKeywordInput}
              onChange={(e) => setMetaKeywordInput(e.target.value)}
              placeholder="Add a meta keyword (e.g., IT solutions)"
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddMetaKeyword())}
            />
            <Button type="button" onClick={handleAddMetaKeyword} className="bg-black">
              Add
            </Button>
          </div>
          {metaKeywords.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {metaKeywords.map((kw, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center">
                  {kw}
                  <button
                    type="button"
                    onClick={() => handleRemoveMetaKeyword(index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        <Button className="bg-red-600 hover:bg-red-700" type="submit">
          {postId ? "Update" : "Create"} Post
        </Button>
      </div>
    </form>
  )
}

