"use client";

import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '/firebase-config';

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
    return <p>No approved comments to display.</p>;
  }

  return (
    <div>
      <div>
        <p><strong>Name:</strong> {comments[currentIndex].name}</p>
        <p><strong>Stars:</strong> {comments[currentIndex].stars}</p>
        <p><strong>Comment:</strong> {comments[currentIndex].comment}</p>
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ApprovedComments;
