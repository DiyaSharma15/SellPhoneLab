// pages/blog/index.js
import Link from 'next/link';
import { getSortedPostsData } from '../../utils/mdreader';
import BlogPostCard from './blogPostCard'; // Ensure this path is correct
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import styles from './BlogPage.module.css';

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
    <Header />
    <div className={styles.container}>
      <div className={styles.blogPostList}>
        {allPostsData.map((post) => (
          <Link href={`/blog/${post.slug || post.id}`} key={post.slug || post.id}>
              <BlogPostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}
