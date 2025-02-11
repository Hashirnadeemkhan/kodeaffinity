import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import type { Metadata } from "next";
import CommentsSection from "@/app/components/widgets/Comment";
import Image from "next/image";
import Navbar from "@/app/components/widgets/Navbar";

interface PageProps {
  params: { slug: string };
}

// ✅ 1. `generateMetadata()` - SEO ke liye metadata generate karega
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const filepath = path.join(process.cwd(), "app/content", `${params.slug}.md`);

  if (!fs.existsSync(filepath)) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
  };
}

// ✅ 2. `generateStaticParams()` - Static routes create karega for `next export`
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "app/content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

// ✅ 3. Page function - Markdown ko HTML me convert karega
export default async function Page({ params }: PageProps) {
  const filepath = path.join(process.cwd(), "app/content", `${params.slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

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
    });

  const htmlContent = await processor.process(content);

  return (
    <div className="pt-5">
<Navbar/>
 
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {data.title}
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400 italic">
          &quot;{data.description}&quot;
        </p>
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

      {data.image && (
        <div className="mb-12">
          <Image
            src={data.image || "/placeholder.svg"}
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

      <CommentsSection />
    </article>
    </div>
  );
}
