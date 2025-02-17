import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"
import { db } from "@/firebase"
import Link from "next/link"
import BlogLayout from "@/app/components/(private)/BlogLayout"

async function getBlogs() {
  const querySnapshot = await getDocs(collection(db, "posts"))
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export default async function Blog() {
  const blogs = await getBlogs()

  return (
    <div>
      <BlogLayout>
        <></>
      </BlogLayout>
      <div className="container max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: any) => (
            <div key={blog.id} className="rounded-lg shadow-md overflow-hidden dark:border-2">
              <Image
                height={300}
                width={300}
                priority
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className="mb-4 text-red-500 font-semibold">{blog.description}</p>
                <div className="text-sm mb-4">
                  <span className="font-semibold">By {blog.author}</span> |{" "}
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
      </div>
    </div>
  )
}

