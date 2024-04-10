// pages/blog/index.js
import Link from 'next/link';
import { getSortedPostsData } from '../utils/mdreader';
import BlogPostCard from './blogPostCard'; // Ensure this path is correct

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div>
      {allPostsData.map((post) => (
        <Link href={`/blog/${post.slug || post.id}`} key={post.slug || post.id}>
          <a>
            <BlogPostCard post={post} />
          </a>
        </Link>
      ))}
    </div>
  );
}
