import styles from './BlogPostCard.module.css'; // Ensure you have this CSS module

function BlogPostCard({ post }) {
  return (
    <div className={styles.card}>
      <img src={post.imageUrl} className={styles.cardImgTop} alt={post.title} />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{post.title}</h5>
        <p className={styles.cardText}>{post.summary}</p>
        <p className={styles.cardText}><small className={styles.textMuted}>{post.date}</small></p>
      </div>
    </div>
  );
}

export default BlogPostCard;
