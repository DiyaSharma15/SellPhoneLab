"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import BlogPostCard from './blogPostCard';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // This is a placeholder. Replace with your actual fetch call
    fetchBlogPosts().then(setPosts);
  }, []);

  return (
    <>
    <Header />
      <div>
        {posts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <BlogPostCard post={post} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

// Placeholder function. Replace with your actual fetch logic
async function fetchBlogPosts() {
  // Example response structure. Adjust according to your data source
  return [
    { id: 1, slug: 'used-phones-calgary', title: 'Where to Buy Used Phones in Calgary', summary: 'A guide to finding affordable used phones...', imageUrl: '/assets/images/blog/buyUsedPhone.webp', date: 'January 27, 2024' },
    // Add more posts as needed
  ];
}
