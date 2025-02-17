
import BlogPostForm from "@/app/components/BlogPostForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create New Blog Post",
  description: "Create a new blog post",
}

export default function CreatePostPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <BlogPostForm />
    </div>
  )
}

