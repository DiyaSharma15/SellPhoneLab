import styles from './BlogPostCard.module.css';

// function BlogPostCard({ post }) {
//   console.log(post.image); // Debugging the image path
//   return (
//     <div className={styles.card}>
//       {post.image && <img src={post.image} className={styles.cardImgTop} alt={post.title} />}
//       <div className={styles.cardBody}>
//         <h5 className={styles.cardTitle}>{post.title}</h5>
//         {/* <p className={styles.cardText}>{post.summary}</p> */}
//         <p className={styles.cardText}><small className={styles.textMuted}>{post.date}</small></p>
//       </div>
//     </div>
//   );
// }

function BlogPostCard({ post }) {
  console.log(post); // Debugging the entire post object
  return (
    <div>
      <img src="/assets/images/blog/buyUsedPhone.webp" alt="Your alt text" />
      <h5>{post.title}</h5>
      <p><small>{post.date}</small></p>
    </div>
  );
}


export default BlogPostCard;
