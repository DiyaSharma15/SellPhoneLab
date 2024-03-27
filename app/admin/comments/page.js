"use client";
import { useEffect, useState } from 'react';
import { db } from '/firebase-config';
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import styles from '../_components/Comment.module.css';
import Header from '../../components/Header'; // Adjust the path as necessary
import Footer from '../../components/Footer'; 

const ModerateCommentsPage = () => {
    const [pendingComments, setPendingComments] = useState([]);
    const [approvedComments, setApprovedComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsCollection = collection(db, "comments");
      const commentsSnapshot = await getDocs(commentsCollection);
      const commentsList = commentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Separate comments based on approval status
      const pending = commentsList.filter(comment => comment.approved !== "true");
      const approved = commentsList.filter(comment => comment.approved === "true");
      setPendingComments(pending);
      setApprovedComments(approved);
    };

    fetchComments();
  }, []);

  const approveComment = async (id) => {
    const commentRef = doc(db, "comments", id);
    await updateDoc(commentRef, { approved: "true" });

    const commentToMove = pendingComments.find(comment => comment.id === id);
    setPendingComments(pendingComments.filter(comment => comment.id !== id));
    setApprovedComments([...approvedComments, { ...commentToMove, approved: "true" }]);
  };

  const deleteComment = async (id) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      await deleteDoc(doc(db, "comments", id));
      setPendingComments(pendingComments.filter(comment => comment.id !== id));
      setApprovedComments(approvedComments.filter(comment => comment.id !== id));
    }
  };

   return (
    <>
    <Header />
      <div className={styles.container}>
        <h1>Moderate Comments</h1>
        <section>
          <h2>Pending Comments</h2>
          {pendingComments.map((comment) => renderComment(comment, approveComment, deleteComment, styles))}
        </section>
        <section>
          <h2>Approved Comments</h2>
          {approvedComments.map((comment) => renderComment(comment, null, deleteComment, styles))}
        </section>
      </div>
    <Footer />
    </>
  );
};

function renderComment(comment, onApprove, onDelete, styles) {
  return (
    <div key={comment.id} className={styles.comment}>
      <p><strong>Name:</strong> {comment.name}</p>
      <p><strong>Stars:</strong> {comment.stars}</p>
      <p><strong>Comment:</strong> {comment.comment}</p>
      <div className={styles.actions}>
        {onApprove && <button onClick={() => onApprove(comment.id)}>Approve</button>}
        <button className={styles.button} onClick={() => onDelete(comment.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ModerateCommentsPage;
