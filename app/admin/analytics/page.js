"use client"; 
// Assuming this file is located at /app/admin/analytics/page.js

import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '/firebase-config'; 
import styles from '../components/Analytics.module.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import { loader as stripeLoader } from './page.loader'; // Import the loader function

const Analytics = () => {
  const [completedAppointments, setCompletedAppointments] = useState(0);
  const [pendingAppointments, setPendingAppointments] = useState(0);
  const [stripeAnalytics, setStripeAnalytics] = useState({}); // State to hold the loaded Stripe data
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
    const fetchStripeData = async () => {
        const loaderResponse = await stripeLoader(); // Call the loader function
        if (loaderResponse && loaderResponse.props) {
          setStripeAnalytics(loaderResponse.props.stripeAnalytics); // Update state with the fetched Stripe data
        }
      };

    fetchAppointments();
    fetchStripeData();
  }, []);

  const appointmentData = {
    labels: ['Completed Appointments', 'Pending Appointments'],
    datasets: [
        {
            label: 'Appointment Analytics',
            data: [completedAppointments, pendingAppointments], // These should be your state variables
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1,
        },
    ],
};
const stripeData = {
  labels: ['Total Transactions', 'Total Revenue'],
  datasets: [
      {
          label: 'Stripe Analytics',
          data: [stripeAnalytics.totalTransactions, stripeAnalytics.totalRevenue], // Assuming these are calculated in your loader
          backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(153, 102, 255, 1)'],
          borderWidth: 1,
      },
  ],
};
const revenueData = {
  labels: ["Jan 1", "Jan 2", "Jan 3"], // Example dates
  datasets: [{
      label: 'Daily Revenue',
      data: [500, 600, 550], // Example revenue data
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
  }]
};
const aovData = {
  labels: ["Jan 1", "Jan 2", "Jan 3"], // Example dates
  datasets: [{
      label: 'Average Order Value',
      data: [50, 60, 55], // Example AOV data
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
  }]
};
const productSalesData = {
  labels: ["Product A", "Product B", "Product C"], // Example products
  datasets: [{
      label: 'Sales',
      data: [300, 150, 200], // Example sales data
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
  }]
};
const customerData = {
  labels: ["New Customers", "Returning Customers"],
  datasets: [{
      label: 'Customer Type',
      data: [120, 80], // Example data
      backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
  }]
};
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div style={{ width: '600px', height: '400px' }}>
            <h2>Appointment Analytics</h2>
            <Chart type="bar" data={appointmentData} />
        </div>
        <div style={{ width: '600px', height: '400px' }}>
            <h2>Stripe Analytics</h2>
            <Chart type="bar" data={stripeData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Analytics;
