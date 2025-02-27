"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Adjust the import path to your Firebase config

interface Blog {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  date: string;
  slug: string;
}

const Insights = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const imageAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const textAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const blogData: Blog[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Blog, "id">),
        }));

        const sortedBlogs = blogData
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 2);
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageControls.start("visible");
          textControls.start("visible");
        } else {
          imageControls.start("hidden");
          textControls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [imageControls, textControls]);

  return (
    <div
      className="bg-gradient-to-r from-red-900 via-purple-800 to-blue-900 py-20 px-10 text-white"
      style={{
        backgroundImage:
          'linear-gradient(to right, #7f1d1d, #6b21a8, #1e3a8a), url("/assets/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <h2 className="lg:text-5xl text-3xl font-bold text-center text-white mb-5">
          Latest Insights.
        </h2>
        <p className="text-white mb-10 lg:text-xl text-sm">
          Hot Off the Press: Your First Choice for the Most Recent Technology Trends and Best Practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-300">No recent blogs available.</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#280A15] rounded-lg shadow-lg overflow-hidden max-w-lg"
              >
                <motion.div
                  initial="hidden"
                  animate={imageControls}
                  variants={imageAnimation}
                  className="p-7"
                >
                  <Image
                    src={blog.imageUrl ?? "/blog.png"}
                    alt={blog.title}
                    height={200}
                    width={200}
                    className="w-full"
                  />
                </motion.div>
                <div className="p-4 flex flex-col items-center justify-center">
                  <motion.h3
                    initial="hidden"
                    animate={textControls}
                    variants={textAnimation}
                    className="lg:text-3xl text-2xl font-bold mb-2 bg-gradient-to-r from-custom-red via-custom-purple to-custom-blue bg-clip-text text-transparent"
                  >
                    {blog.title}
                  </motion.h3>
                  <p className="text-white mb-4 text-center lg:text-lg text-sm">
                    {blog.description}
                  </p>
                  <p className="text-white mb-4 text-center lg:text-lg text-sm">
                    Posted on: {new Date(blog.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                  </p>
                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className="text-gradient mb-2 bg-gradient-to-r from-custom-red via-custom-purple to-custom-blue bg-clip-text text-transparent font-semibold text-center text-lg"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Insights;
