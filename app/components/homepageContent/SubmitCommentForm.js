import { useState } from 'react';
import StarRating from './StarRating'; // Adjust path as necessary
import { db } from '/firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import styles from '../../cssFiles/Comment.module.css';
import ApprovedComments from './ApprovedComment';

const SubmitCommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "comments"), {
      name,
      stars, // Ensure this matches your database field expectations
      comment,
      approved: "false" // Assume new comments are not approved by default
    });

    // Reset form (optional)
    setName('');
    setStars(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.submitCommentForm}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.textInput} />
        </label>
      </div>
      <div className={styles.formGroup}>
        <StarRating onRating={(rate) => setStars(rate)} className={styles.starRating} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>
          Comment:
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} className={styles.textareaInput}></textarea>
        </label>
      </div>
      <button type="submit" className={styles.submitBtn}>Submit Comment</button>
    </form>
  );
};

export default SubmitCommentForm;
