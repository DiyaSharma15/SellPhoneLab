"use client";
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '/firebase-config'; // Make sure this path is correct
import styles from '../_components/Analytics.module.css'; // Make sure this path is correct
import Header from "../../components/Header"; // Make sure this path is correct
import Footer from "../../components/Footer"; // Make sure this path is correct

// Provide a default value for stripeData in the component's parameters
const Analytics = ({ stripeData = { transactions: 0, totalRevenue: 0 } }) => {
  const [completedAppointments, setCompletedAppointments] = useState(0);
  const [pendingAppointments, setPendingAppointments] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
      const completedQuery = query(collection(db, 'appointments'), where('status', '==', 'Complete'));
      const pendingQuery = query(collection(db, 'appointments'), where('status', '==', 'Pending'));

      const [completedSnapshot, pendingSnapshot] = await Promise.all([
        getDocs(completedQuery),
        getDocs(pendingQuery),
      ]);

      setCompletedAppointments(completedSnapshot.docs.length);
      setPendingAppointments(pendingSnapshot.docs.length);
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Analytics Dashboard</h1>
        <div>
          <h2>Completed Appointments</h2>
          <p>Total: {completedAppointments}</p>
        </div>
        <div>
          <h2>Pending Appointments</h2>
          <p>Total: {pendingAppointments}</p>
        </div>
        <div>
          <h2>Stripe Transactions</h2>
          <p>Total Transactions: {stripeData.transactions}</p>
        </div>
        <div>
          <h2>Total Revenue</h2>
          <p>${stripeData.totalRevenue.toFixed(2)}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Analytics;
