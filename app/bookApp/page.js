"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '/firebase-config'; 
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ProgressBar } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import styles from './BookAppointment.module.css';
import Header from "../components/Header"
import Footer from '../components/Footer';

export default function BookAppointment() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        await addDoc(collection(db, "appointments"), {
          location: data.location,
          deviceType: data.deviceType,
          issueDescription: data.issueDescription,
          customerName: data.customerName,
          email: data.email,
          appointmentTime: Timestamp.fromDate(new Date(data.appointmentTime)),
        });
        setIsSubmitted(true);
        reset();
      } catch (error) {
        console.error("Error booking appointment: ", error);
      }
    }
  };

  const calculateProgress = () => {
    switch(currentStep) {
      case 1: return 33;
      case 2: return 66;
      case 3: return 100;
      default: return 0;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className={styles.formField}>
              <label htmlFor="location" className={styles.label}>Location</label>
              <select id="location" {...register("location", { required: true })} className={styles.input}>
                <option value="calgary">Calgary</option>
                <option value="airdrie">Airdrie</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label htmlFor="deviceType" className={styles.label}>Device/Brand Type</label>
              <select id="deviceType" {...register("deviceType", { required: true })} className={styles.input}>
                <option value="apple">Apple</option>
                <option value="android">Android</option>
                <option value="huawei">Huawei</option>
                <option value="google">Google</option>
                <option value="lg">LG</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label htmlFor="issueDescription" className={styles.label}>Repair/Issue</label>
              <textarea id="issueDescription" {...register("issueDescription", { required: true })} className={styles.textarea}></textarea>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles.formField}>
              <label htmlFor="customerName" className={styles.label}>Name</label>
              <input id="customerName" type="text" {...register("customerName", { required: true })} className={styles.input} />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input id="email" type="email" {...register("email", { required: true })} className={styles.input} />
            </div>
            <div className={styles.formField}>
              <label htmlFor="appointmentTime" className={styles.label}>Appointment Time</label>
              <input id="appointmentTime" type="datetime-local" {...register("appointmentTime", { required: true })} className={styles.input} />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className={styles.reviewSection}>
              <h3 className={styles.reviewTitle}>Review and Confirm Your Appointment</h3>
              <p><strong>Location:</strong> {watch("location")}</p>
              <p><strong>Device/Brand Type:</strong> {watch("deviceType")}</p>
              <p><strong>Issue Description:</strong> {watch("issueDescription")}</p>
              <p><strong>Name:</strong> {watch("customerName")}</p>
              <p><strong>Email:</strong> {watch("email")}</p>
              <p><strong>Appointment Time:</strong> {watch("appointmentTime")}</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
        <Header/>
    <div className={styles.formContainer}>
        
      {isSubmitted ? (
        <div className={styles.thankYouMessage}>
          <h2>Thank You!</h2>
          <p>Your appointment has been booked successfully.</p>
        </div>
      ) : (
        <>
          <ProgressBar percent={calculateProgress()} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderStep()}
            <button type="submit" className={styles.submitButton}>{currentStep < 3 ? 'Next' : 'Submit'}</button>
          </form>
        </>
      )}
      
    </div>
    <Footer/>
    </div>
  );
}
