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
            label: 'Appointments',
            data: [completedAppointments, pendingAppointments], // These should be your state variables
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1,
        },
    ],
};
const revenueData = {
  labels: ['Total Revenue', 'Average Transaction Value'],
  datasets: [{
    label: 'Revenue Metrics',
    type: 'bar',  // Both datasets as bar charts
    data: [stripeAnalytics.totalRevenue, stripeAnalytics.averageTransactionValue],  // Ensure both data points are in one dataset
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)',  // Blue for total revenue
      'rgba(251, 192, 147, .5)'  // Yellow for avg. transaction value
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',  // Blue border
      'rgba(251, 192, 147, 1)'  // Yellow border
    ],
    borderWidth: 1
  }]
};


const customerData = {
  labels: ['New Customers', 'Returning Customers'],
  datasets: [{
    label: 'Customer Types',
    data: [stripeAnalytics.newCustomers, stripeAnalytics.returningCustomers],
    backgroundColor: ['rgba(54, 162, 235, .5)', 'rgba(255, 206, 86, .5)'],
    borderColor: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'],
    borderWidth: 1,
  }],
};

const transactionsData = {
  labels: ['Total Transactions'],
  datasets: [{
    label: 'Transactions',
    data: [stripeAnalytics.totalTransactions],
    backgroundColor: ['rgba(75, 192, 192, 0.2)'],
    borderColor: ['rgba(75, 192, 192, 1)'],
    borderWidth: 1,
  }],
};
const monthlyRevenueData = {
  labels: Object.keys(stripeAnalytics.monthlyRevenue || {}),
  datasets: [{
    label: 'Monthly Revenue',
    data: Object.values(stripeAnalytics.monthlyRevenue || {}),
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
  }],
};

const transactionsByMonthData = {
  labels: Object.keys(stripeAnalytics.monthlyTransactions || {}),
  datasets: [{
    label: 'Transactions by Month',
    data: Object.values(stripeAnalytics.monthlyTransactions || {}),
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
  }],
};


return (
  <>
    <Header />
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around' // Adjusts spacing around items
    }}>
      <div style={{ width: '600px', height: '400px', margin: '10px' }}>
        <h2>Appointment Analytics</h2>
        <Chart type="bar" data={appointmentData} />
      </div>
      <div style={{ width: '600px', height: '400px', margin: '10px' }}>
        <h2>Revenue & Avg. Transaction Amount</h2>
        <Chart type="bar" data={revenueData} />
      </div>
      <div style={{ width: '550px', height: '270px', margin: '10px', marginBottom: '55px' }}>
        <h2>New vs. Returning Customers</h2>
        <Chart type="pie" data={customerData} />
      </div>
      <div style={{ width: '600px', height: '400px', margin: '10px' }}>
        <h2>Transactions</h2>
        <Chart type="bar" data={transactionsData} />
      </div>
      <div style={{ width: '600px', height: '400px', margin: '10px' }}>
        <h2>Monthly Revenue Trend</h2>
        <Chart type="line" data={monthlyRevenueData} />
      </div>
      
      <div style={{ width: '600px', height: '400px', margin: '10px' }}>
        <h2>Transactions by Month</h2>
        <Chart type="bar" data={transactionsByMonthData} />
      </div>
        </div>
    <Footer />
  </>
);

};

export default Analytics;
