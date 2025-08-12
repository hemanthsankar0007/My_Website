// @flow strict
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { personalData } from "@/utils/data/personal-data";
import BlogCard from './blog-card';

function Blog({ blogs: initialBlogs = [] }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [loading, setLoading] = useState(initialBlogs.length === 0);

  useEffect(() => {
    if (initialBlogs.length === 0) {
      // Fetch blogs client-side if not provided
      const fetchBlogs = async () => {
        try {
          const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
          if (res.ok) {
            const data = await res.json();
            const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
            setBlogs(filtered);
          }
        } catch (error) {
          console.error('Error fetching blogs:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchBlogs();
    }
  }, [initialBlogs]);

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-white">Loading blogs...</div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-white text-center">
            <p className="text-lg mb-2">No blogs available</p>
            <p className="text-gray-400">Check back later for new content!</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {
            blogs.slice(0, 6).map((blog, i) => (
              blog?.cover_image &&
              <BlogCard blog={blog} key={i} />
            ))
          }
        </div>
      )}

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;