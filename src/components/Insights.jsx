"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../../db/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

const Insights = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false); // To track user dragging

  // ✅ Fetch blogs from Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const categoriesRef = collection(db, "categories");
        const categoriesSnapshot = await getDocs(categoriesRef);
        let allBlogs = [];

        for (const categoryDoc of categoriesSnapshot.docs) {
          const categoryName = categoryDoc.id;
          const blogsRef = collection(db, "categories", categoryName, "blogs");
          const blogsSnapshot = await getDocs(blogsRef);

          blogsSnapshot.forEach((blogDoc) => {
            allBlogs.push({
              id: blogDoc.id,
              ...blogDoc.data(),
              category: categoryName,
            });
          });
        }

        setBlogs([...allBlogs]); // No need to duplicate here, handled in UI
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // ✅ Auto-scroll every 3s (if not manually dragged)
  useEffect(() => {
    if (blogs.length === 0) return;

    const interval = setInterval(() => {
      if (!isDragging.current) {
        setCurrentIndex((prev) => (prev + 1) % blogs.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [blogs]);

  // ✅ Swipe gesture support
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % blogs.length),
    onSwipedRight: () => setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length),
    preventScrollOnSwipe: true,
  });

  return (
    <section
      className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      {...handlers}
    >
      {/* Section Heading */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Explore Our
          <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            &nbsp;Insights
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-2">
          Stay informed about the latest innovations and industry insights.
        </p>
      </motion.div>

      {/* ✅ Smooth Scrolling Insights Container */}
      <div className="relative mt-10 w-full max-w-5xl mx-auto overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }} // Keeps it scrollable
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }} // Smooth scrolling
          onDragStart={() => (isDragging.current = true)}
          onDragEnd={() => (isDragging.current = false)}
          animate={{ x: -currentIndex * 280 }} // Smooth movement per index
          transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
        >
          {blogs.length > 0 ? (
            [...blogs, ...blogs].map((post, i) => (
              <motion.div
                key={`${post.id}-${i}`}
                className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 w-72 flex-shrink-0"
                style={{ scrollSnapAlign: "center" }}
              >
                <Link href={`/blogs/${post.id}`}>
                  {/* Blog Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.images?.[0] || "https://via.placeholder.com/400"}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="hover:opacity-85 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-1 text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                      {post.subtitle || "No description available"}
                    </p>
                    <div className="flex items-center mt-3 text-gray-400 text-xs">
                      <span>{post.author || "TechTrio"}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date || "Unknown Date"}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No blogs available.</p>
          )}
        </motion.div>
      </div>

      {/* View All Articles Button */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href="/blogs">
          <button className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded-full font-semibold transition-all hover:brightness-110">
            View All Articles
            <ArrowRight size={18} />
          </button>

        </Link>
      </motion.div>
    </section>
  );
};

export default Insights;
