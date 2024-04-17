"use client";
import React, { useEffect, useState } from 'react';
import { db } from '/firebase-config';  // Update this path as necessary
import { collection, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import styles from '../components/Comment.module.css';  // Update this path as necessary
import Header from '../../components/Header';  // Update this path as necessary
import Footer from '../../components/Footer';  // Update this path as necessary

const ModerateCommentsPage = () => {
    const [pendingComments, setPendingComments] = useState([]);
    const [approvedComments, setApprovedComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const commentsCollection = collection(db, "comments");
            const commentsSnapshot = await getDocs(commentsCollection);
            const commentsList = commentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
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
            <h1 className={styles.title}>Moderate Comments</h1>
            <section>
                <h2 className={styles.title}>Pending Comments</h2>
                {pendingComments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                        <p><strong>Name:</strong> {comment.name}</p>
                        <p><strong>Stars:</strong> {comment.stars}</p>
                        <p><strong>Comment:</strong> {comment.comment}</p>
                        <div className={styles.actions}>
                            <button className={styles.button + ' ' + styles.buttonApprove} onClick={() => approveComment(comment.id)}>Approve</button>
                            <button className={styles.button + ' ' + styles.buttonDelete} onClick={() => deleteComment(comment.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </section>
            <section>
                <h2 className={styles.title}>Approved Comments</h2>
                {approvedComments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                        <p><strong>Name:</strong> {comment.name}</p>
                        <p><strong>Stars:</strong> {comment.stars}</p>
                        <p><strong>Comment:</strong> {comment.comment}</p>
                        <div className={styles.actions}>
                            <button className={styles.button + ' ' + styles.buttonDelete} onClick={() => deleteComment(comment.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
        <Footer />
        </>
    );
};

export default ModerateCommentsPage;
