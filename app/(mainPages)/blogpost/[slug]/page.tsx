import fs from "fs"
import path from "path"
import matter from "gray-matter"
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

import { TableOfContents } from "@/app/components/widgets/TableOfContent"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const filepath = path.join(process.cwd(), "app/content", `${params.slug}.md`)

  if (!fs.existsSync(filepath)) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    }
  }

  const fileContent = fs.readFileSync(filepath, "utf-8")
  const { data } = matter(fileContent)

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  }
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "app/content")
  const files = fs.readdirSync(contentDir)

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }))
}

export default async function Page({ params }: PageProps) {
  const filepath = path.join(process.cwd(), "app/content", `${params.slug}.md`)

  if (!fs.existsSync(filepath)) {
    notFound()
  }

  const fileContent = fs.readFileSync(filepath, "utf-8")
  const { content, data } = matter(fileContent)

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: {
        className: ["anchor"],
      },
    })
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })

  const htmlContent = await processor.process(content)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container relative mx-auto px-4 py-16">
        <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
          <header className="mb-12 text-center not-prose">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{data.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground italic">&quot;{data.description}&quot;</p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
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

          {data.image && (
            <div className="my-12 aspect-video overflow-hidden rounded-lg">
              <Image
                src={data.image || "/placeholder.svg"}
                alt={data.title}
                width={1200}
                height={630}
                className="object-cover"
                priority
              />
            </div>
          )}

          <TableOfContents content={content} />

          <div dangerouslySetInnerHTML={{ __html: htmlContent.toString() }} className="mt-12" />
        </article>

        <hr className="my-12 border-border" />

        <CommentsSection />
      </div>
    </div>
  )
}

