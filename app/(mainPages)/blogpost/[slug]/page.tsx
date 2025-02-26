import { doc, getDoc } from "firebase/firestore" //Firestore se ek specific document (post) fetch karne ke liye.
import { db } from "@/firebase"
import { notFound } from "next/navigation"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import type { Metadata } from "next"
import CommentsSection from "@/app/components/widgets/Comment"
import Navbar from "@/app/components/widgets/Navbar"
import { transformerCopyButton } from "@rehype-pretty/transformers"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const docRef = doc(db, "posts", params.slug)  //blogpost sa data fetch krrha ha or params.slug se document ka reference (docRef) bana raha hai.
  const docSnap = await getDoc(docRef)  //getDoc(docRef) se document fetch kar raha hai.

  if (!docSnap.exists()) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }

  const data = docSnap.data()

  // Combine both keywords and metaKeywords arrays, filter out duplicates
  const allKeywords = Array.from(new Set([...(data.keywords || []), ...(data.metaKeywords || [])]))

  return {
    title: `${data.title} | Kode Affinity Blog`,
    description: data.description,
    keywords: allKeywords.join(", "), // Convert array to comma-separated string
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      // Add other OpenGraph metadata as needed
    },
    // You can also add Twitter cards and other metadata here
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
            <time dateTime={data.date}>
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          {data.keywords && data.keywords.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Keywords:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {data.keywords.map((keyword: string, index: number) => (
                  <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        <div
          dangerouslySetInnerHTML={{ __html: htmlContent.value as string }}
          className="prose dark:prose-invert mx-auto"
        />
        <CommentsSection blogId={params.slug} />
      </article>
    </div>
  )
}

