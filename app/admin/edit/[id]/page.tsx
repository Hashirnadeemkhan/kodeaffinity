import BlogPostForm from "@/app/components/BlogPostForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Edit Blog Post",
  description: "Edit an existing blog post",
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
      <BlogPostForm postId={params.id} />
    </div>
  )
}

