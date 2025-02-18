import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { notFound } from "next/navigation"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import { transformerCopyButton } from "@rehype-pretty/transformers"
import type { Metadata } from "next"
import CommentsSection from "@/app/components/widgets/Comment"
import Image from "next/image"
import Navbar from "@/app/components/widgets/Navbar"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const docRef = doc(db, "posts", params.slug)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }

  const data = docSnap.data()

  return {
    title: data.title,
    description: data.description,
  }
}

export default async function Page({ params }: PageProps) {
  const docRef = doc(db, "posts", params.slug)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    notFound()
  }

  const data = docSnap.data()

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })

  const htmlContent = await processor.process(data.content)

  return (
    <div className="pt-5">
      <Navbar />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">{data.title}</h1>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-400 italic">&quot;{data.description}&quot;</p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <p>By {data.author}</p>
            <span>•</span>
            <time dateTime={data.date}>
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {data.imageUrl && (
          <div className="mb-12">
            <Image
              src={data.imageUrl || "/placeholder.svg"}
              alt={data.title}
              width={1200}
              height={630}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

        <div
          dangerouslySetInnerHTML={{ __html: htmlContent.toString() }}
          className="prose prose-lg dark:prose-invert max-w-none"
        />

        <hr className="my-12 border-gray-200 dark:border-gray-700" />

      
<CommentsSection blogId={params.slug} />
      </article>
    </div>
  )
}

