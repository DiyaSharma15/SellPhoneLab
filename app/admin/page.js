"use client";

// AdminPage.js
import React from "react";
import Header from "../components/Header"; // Adjust the path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary
import Link from "next/link";
import styles from './_components/AdminPage.module.css'; // Adjust the path as necessary

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
            
          </ul>
        </nav>
        {/* Additional admin page content here */}
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
