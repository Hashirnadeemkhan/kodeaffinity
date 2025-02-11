// "use client"

// import { useEffect, useState } from "react"
// import { cn } from "@/lib/utils"

// interface TableOfContentsProps {
//   content: string
// }

// interface HeadingItem {
//   id: string
//   text: string
//   level: number
// }

// export function TableOfContents({ content }: TableOfContentsProps) {
//   const [activeId, setActiveId] = useState<string>("")
//   const [headings, setHeadings] = useState<HeadingItem[]>([])

//   useEffect(() => {
//     const headingMatches = content.match(/^#{1,6}\s+.+$/gm) || []
//     const parsedHeadings = headingMatches.map((heading) => {
//       const level = heading.match(/^#+/)?.[0].length || 1
//       const text = heading.replace(/^#+\s+/, "")
//       const id = text.toLowerCase().replace(/[^\w]+/g, "-")
//       return { id, text, level }
//     })
//     setHeadings(parsedHeadings)
//   }, [content])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id)
//           }
//         })
//       },
//       { rootMargin: "0% 0% -80% 0%" },
//     )

//     const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
//     headingElements.forEach((element) => observer.observe(element))

//     return () => {
//       headingElements.forEach((element) => observer.unobserve(element))
//     }
//   }, [])

//   return (
//     <nav className="fixed top-24 right-4 hidden w-64 overflow-auto xl:block">
//       <h4 className="mb-4 text-sm font-semibold">Table of Contents</h4>
//       <ul className="space-y-2 text-sm">
//         {headings.map((heading) => (
//           <li key={heading.id} style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}>
//             <a
//               href={`#${heading.id}`}
//               className={cn(
//                 "inline-block hover:text-primary transition-colors",
//                 activeId === heading.id ? "text-primary font-medium" : "text-muted-foreground",
//               )}
//             >
//               {heading.text}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

