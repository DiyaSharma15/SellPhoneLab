"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '/firebase-config'; // Adjust this path to where your Firebase config is located
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import styles from './RepairForm.module.css'; // Update this path to your CSS module

const RepairForm = ({ selectedModel, setShowForm }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "appointments"), {
        ...data,
        deviceModel: selectedModel,
        submittedAt: Timestamp.fromDate(new Date()),
      });
      alert("Your repair request has been submitted successfully.");
      reset();
      setShowForm(false); // Hide the form and potentially show a success message or redirect
    } catch (error) {
      console.error("Error submitting repair request: ", error);
      alert("An error occurred while submitting your repair request.");
    }
  };

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
