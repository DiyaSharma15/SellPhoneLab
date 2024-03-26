"use client";
import { useState } from 'react';
import StarRating from './StarRating'; // Adjust path as necessary
import { db } from '/firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const SubmitCommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add a new document in collection "comments"
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <StarRating onRating={(rate) => setStars(rate)} />
      <label>
        Comment:
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default SubmitCommentForm;
