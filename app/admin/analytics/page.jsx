"use client"; 

import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '/firebase-config'; 
import styles from '../components/Analytics.module.css'; 
import Header from "../../components/Header"; 
import Footer from "../../components/Footer"; 

const Analytics = ({ stripeAnalytics = {} }) => {
  console.log('Received stripeAnalytics props:', stripeAnalytics);
  const [completedAppointments, setCompletedAppointments] = useState(0);
  const [pendingAppointments, setPendingAppointments] = useState(0);

  useEffect(() => {
      console.log('Starting to fetch Firestore data...');
      const fetchAppointments = async () => {
          const completedQuery = query(collection(db, 'appointments'), where('status', '==', 'Complete'));
          const pendingQuery = query(collection(db, 'appointments'), where('status', '==', 'Pending'));

          const [completedSnapshot, pendingSnapshot] = await Promise.all([
              getDocs(completedQuery),
              getDocs(pendingQuery),
          ]);

          console.log('Fetched completed appointments:', completedSnapshot.docs.map(doc => doc.data()));
          console.log('Fetched pending appointments:', pendingSnapshot.docs.map(doc => doc.data()));

          setCompletedAppointments(completedSnapshot.docs.length);
          setPendingAppointments(pendingSnapshot.docs.length);
      };

      fetchAppointments();
  }, []);

  return (
      <>
          <Header />
          <div className={styles.container}>
              <h1>Stripe Analytics</h1>
              <div>
                  <h2>Total Transactions</h2>
                  <p>{stripeAnalytics.totalTransactions || 0}</p>
              </div>
              <div>
                  <h2>Total Revenue Made</h2>
                  <p>${stripeAnalytics.totalRevenue?.toFixed(2) || '0.00'}</p>
              </div>
              <div>
                  <h2>Appointments</h2>
                  <p>Completed Appointments: {completedAppointments}</p>
                  <p>Pending Appointments: {pendingAppointments}</p>
              </div>
          </div>
          <Footer />
      </>
  );
};

export default Analytics;