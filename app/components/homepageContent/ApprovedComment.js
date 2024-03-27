import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '/firebase-config';
import styles from '../../cssFiles/ViewComment.module.css'; // Adjust the path as necessary

const ApprovedComments = () => {
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchApprovedComments = async () => {
      const q = query(collection(db, "comments"), where("approved", "==", "true"));
      const querySnapshot = await getDocs(q);
      const fetchedComments = [];
      querySnapshot.forEach((doc) => {
        fetchedComments.push(doc.data());
      });
      setComments(fetchedComments);
    };

    fetchApprovedComments();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  if (!comments.length) {
    return <p className={styles.noComments}>No approved comments to display.</p>;
  }

  return (
    <div className={styles.commentContainer}>
      <div className={styles.comment}>
        <p><strong>Name:</strong> {comments[currentIndex].name}</p>
        <p><strong>Stars:</strong> <StarDisplay rating={comments[currentIndex].stars} /></p>
        <p><strong>Comment:</strong> {comments[currentIndex].comment}</p>
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.navButton}>Prev</button>
        <button onClick={handleNext} className={styles.navButton}>Next</button>
      </div>
    </div>
  );
};

// The StarDisplay function/component
const StarDisplay = ({ rating }) => {
  const fullStar = "★";
  const emptyStar = "☆";
  const maxRating = 5; // Adjust based on your scale
  let starsDisplay = "";

  for (let i = 1; i <= maxRating; i++) {
    starsDisplay += i <= rating ? fullStar : emptyStar;
  }

  return <span className={styles.starDisplay}>{starsDisplay}</span>;
};

export default ApprovedComments;
