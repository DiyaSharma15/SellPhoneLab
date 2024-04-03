"use client";
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '/firebase-config'; // Adjust the path as necessary
import styles from '../_components/Analytics.module.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Analytics = () => {
  const [completedAppointments, setCompletedAppointments] = useState(0);
  const [pendingAppointments, setPendingAppointments] = useState(0);
  const [stripeTransactions, setStripeTransactions] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0); // Total revenue in dollars

  useEffect(() => {
    // Fetch appointments from Firebase
    const fetchAppointments = async () => {
      // Fetch all appointments for 'pending' count, adjust if your logic differs
      const allAppointmentsQuery = query(collection(db, 'appointments'));
      const allAppointmentsSnapshot = await getDocs(allAppointmentsQuery);
      setPendingAppointments(allAppointmentsSnapshot.docs.length);


      const completedSnapshot = await getDocs(completedQuery);
      const pendingSnapshot = await getDocs(pendingQuery);

      setCompletedAppointments(completedSnapshot.docs.length);
      setPendingAppointments(pendingSnapshot.docs.length);
    };

    fetchAppointments();
  }, []);

  useEffect(() => {
    const fetchStripeData = async () => {
      const res = await fetch('../_components/stripeTransactions.js ');
      const { balance, totalRevenue, transactions } = await res.json();
  
      if (res.ok) {
        setStripeTransactions(transactions);
        setTotalRevenue(totalRevenue);
      } else {
        console.error('Failed to fetch Stripe data');
      }
    };
  
    fetchStripeData();
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
          <p>Total Transactions: {stripeTransactions.length}</p>
        </div>
        <div>
          <h2>Total Revenue</h2>
          <p>${totalRevenue.toFixed(2)}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Analytics;
