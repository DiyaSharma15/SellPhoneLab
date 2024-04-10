"use client";
require('dotenv').config();

import { useState } from 'react';
import Link from 'next/link';
import BlogPostCard from './blogPostCard'; // Ensure correct path
import Header from '../components/Header';
import Footer from '../components/Footer';
import postsData from './blogPosts.json'; // Import the JSON data directly

const POSTS_PER_PAGE = 8; // Updated number of posts per page

export default function BlogPage() {
  const [posts, setPosts] = useState(postsData); // Initialize state with the imported data
  const [page, setPage] = useState(1);

  // Calculate the posts to display based on the current page
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const selectedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <Header />
      <div>
        {selectedPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} passHref>
              <BlogPostCard post={post} />
          </Link>
        ))}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {Array.from({ length: Math.ceil(posts.length / POSTS_PER_PAGE) }, (_, i) => (
            <button key={i} onClick={() => setPage(i + 1)} style={{ margin: '5px' }}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
