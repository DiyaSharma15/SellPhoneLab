"use client";

// AdminPage.js
import React from "react";
import Header from "../components/Header"; // Adjust the path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary
import Link from "next/link";
import styles from './components/AdminPage.module.css'; // Adjust the path as necessary

const AdminPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.adminContainer}>
        <nav className={styles.adminNav}>
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
            <li className={styles.navItem}>
              <Link href="/admin/updateProducts">Modify Products</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
