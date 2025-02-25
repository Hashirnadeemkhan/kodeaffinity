"use client"

import { useState, useEffect } from "react"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "@/firebase"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trash2, Edit, Eye } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  description: string
  slug: string
  imageUrl: string
}

export default function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"))
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BlogPost[]
      setPosts(fetchedPosts)
    }

    fetchPosts()
  }, [])

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deleteDoc(doc(db, "posts", id))
      setPosts(posts.filter((post) => post.id !== id))
    }
  }

  return (
    <div className="container mx-auto p-6">
      {/* Buttons Section */}
      <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
        <div className="flex gap-4">
          <Link href="/admin/create">
            <Button className="bg-red-600 hover:bg-red-700">
              Create New Post
            </Button>
          </Link>
          <Link href="/admin/adminComment">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Manage Comments
            </Button>
          </Link>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href={`/blogpost/${post.slug}`}>
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={`/admin/edit/${post.id}`}>
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="destructive" size="icon" onClick={() => handleDelete(post.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}