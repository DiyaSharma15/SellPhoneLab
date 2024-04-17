"use client";
import React, { useEffect, useState } from "react";
import { db } from '/firebase-config'; // Adjust the path as necessary
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from './components/AdminPage.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
const AdminPage = () => {
  const [pendingAppointments, setPendingAppointments] = useState(0);
  const [completeAppointments, setCompleteAppointments] = useState(0);
  const [pendingComments, setPendingComments] = useState(0);
  const [approvedComments, setApprovedComments] = useState(0);

  useEffect(() => {
    async function fetchData() {
      // Fetch Appointments
      const appointmentsQueryPending = query(collection(db, "appointments"), where("status", "==", "Pending"));
      const appointmentsSnapshotPending = await getDocs(appointmentsQueryPending);
      setPendingAppointments(appointmentsSnapshotPending.size);

      const appointmentsQueryComplete = query(collection(db, "appointments"), where("status", "==", "Complete"));
      const appointmentsSnapshotComplete = await getDocs(appointmentsQueryComplete);
      setCompleteAppointments(appointmentsSnapshotComplete.size);

      // Fetch Comments
      const commentsQueryPending = query(collection(db, "comments"), where("approved", "==", 'false'));
      const commentsSnapshotPending = await getDocs(commentsQueryPending);
      setPendingComments(commentsSnapshotPending.size);

      const commentsQueryApproved = query(collection(db, "comments"), where("approved", "==", 'true'));
      const commentsSnapshotApproved = await getDocs(commentsQueryApproved);
      setApprovedComments(commentsSnapshotApproved.size);
    }

    fetchData();
  }, []);

  return (
    <>
    <Header />
    <div className={styles.dashboard}>
      
      <div className={styles.welcomeBox}>
        <h1>Welcome, Admin!</h1>
        <p>Here&apos;s a quick overview of your site&apos;s activity.</p>
      </div>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Pending Appointments</h3>
          <p>{pendingAppointments}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Complete Appointments</h3>
          <p>{completeAppointments}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Pending Comments</h3>
          <p>{pendingComments}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Approved Comments</h3>
          <p>{approvedComments}</p>
        </div>
      </div>
      <div className={styles.adminNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/admin/inventory">Inventory Management</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin/appointments">View Customer Appointments</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin/comments">Moderate Comments</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin/analytics">Analytics</Link>
          </li>
        </ul>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default AdminPage;