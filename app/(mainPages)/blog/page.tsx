import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"
import { db } from "@/firebase"
import Link from "next/link"
import BlogLayout from "@/app/components/(private)/BlogLayout"
import { Metadata } from "next"

// Add revalidation to ensure fresh data
export const revalidate = 0 // Revalidate at every request

// Static metadata for the Blog page
export const metadata: Metadata = {
  title: "Kode Affinity Blog | IT, Web Development, SEO & Branding Insights",
  description:
    "Stay updated with the latest trends in IT, web development, branding, and SEO. Explore valuable insights, tips, and best practices on the Kode Affinity blog.",
}

async function getBlogs() {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"))
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return blogs
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return []
  }
}

export default async function Blog() {
  const blogs = await getBlogs()

  return (
    <div>
      <BlogLayout>
        <></>
      </BlogLayout>
      <div className="container max-w-7xl mx-auto p-4 mb-10">
        <h1 className="text-4xl font-bold text-center mt-10 mb-8">Blog</h1>

        {blogs.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No blog posts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog: any) => (
              <div key={blog.id} className="rounded-lg shadow-md overflow-hidden dark:border-2">
                <div className="relative h-56">
                  <Image
                    src={blog.imageUrl || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                  <p className="mb-4 text-red-500 font-semibold">{blog.description}</p>
                  <div className="text-sm mb-4">
                    <span className="font-semibold">
                      {new Date(blog.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <button className="hover:text-black text-red-400 font-semibold">
                    <Link href={`/blogpost/${blog.slug}`}>Read More</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}