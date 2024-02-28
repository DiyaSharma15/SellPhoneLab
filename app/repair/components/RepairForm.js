// Opt-in to Next.js' new client-side rendering feature.
"use client";

// Import React and useForm hook from react-hook-form for form handling.
import React from 'react';
import { useForm } from 'react-hook-form';

// Import Firebase configuration and Firestore functions.
import { db } from '/firebase-config'; // Path to Firebase config
import { collection, addDoc, Timestamp } from 'firebase/firestore';

// Import CSS module for styling.
import styles from './RepairForm.module.css'; 

// Define the RepairForm component with props for the selected device model and a function to toggle form visibility.
const RepairForm = ({ selectedModel, setShowForm }) => {
  // Initialize form methods including validation and reset functionality.
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Define onSubmit function for form submission.
  const onSubmit = async (data) => {
    try {
      // Attempt to add a new document to the 'appointments' collection in Firestore.
      // Include form data, the selected device model, and a timestamp.
      await addDoc(collection(db, "appointments"), {
        ...data,
        deviceModel: selectedModel,
        submittedAt: Timestamp.fromDate(new Date()),
      });
      // Show success alert and reset form fields.
      alert("Your repair request has been submitted successfully.");
      reset();
      setShowForm(false); // Optionally hide the form or redirect the user after submission.
    } catch (error) {
      // Log and alert the user of any errors during submission.
      console.error("Error submitting repair request: ", error);
      alert("An error occurred while submitting your repair request.");
    }
  };

  // Render the form with input fields for name, email, and issue description.
  // Inputs use the `register` function for react-hook-form integration, including validation.
  return (
    <div className={styles.formContainer}>
      <h2>Repair Request Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label htmlFor="customerName">Name:</label>
          <input id="customerName" {...register("customerName", { required: "Name is required" })} />
          {errors.customerName && <p className={styles.error}>{errors.customerName.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="issueDescription">Issue Description:</label>
          <textarea id="issueDescription" {...register("issueDescription", { required: "Issue description is required" })}></textarea>
          {errors.issueDescription && <p className={styles.error}>{errors.issueDescription.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label>Device Model:</label>
          <input type="text" value={selectedModel} readOnly />
        </div>
        <button type="submit" className={styles.submitButton}>Submit Request</button>
        <button type="button" onClick={() => setShowForm(false)} className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Go Back
        </button>
      </form>
    </div>
  );
};

export default RepairForm;
