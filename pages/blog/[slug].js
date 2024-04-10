// pages/blog/[slug].js
import { useRouter } from 'next/router';
import { getSortedPostsData, getPostData } from '../../utils/mdreader';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export async function getStaticPaths() {
    const allPostsData = await getSortedPostsData();
  
    // Filter posts to ensure we only include those with a defined slug
    const paths = allPostsData.filter(post => post.slug).map(({ slug }) => ({
      params: { slug },
    }));
  
    return {
      paths,
      fallback: false, // can use 'blocking' if you want SSR for not pre-rendered paths
    };
  }
  

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  // Use the useRouter hook to access the dynamic route parameter if needed
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header />
    <article>
      <h1>{postData.title}</h1>
      {postData.image && <img src={postData.image} alt={postData.title} />}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <div><small>{postData.date}</small></div>
    </article>
    <Footer />
    </>
  );
}
