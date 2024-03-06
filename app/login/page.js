"use client";
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/firebase-config'; // Adjust the path based on where you placed your firebase-config
import styles from './components/Login.module.css'; // Update the import path to match your file structure
import { IoArrowBack } from 'react-icons/io5'; // Importing back icon
import Link from 'next/link'; // Importing Link for navigation

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully!");
      // Redirect to admin dashboard or homepage after successful login
      window.location.href = '../admin'; // Adjust the path to your admin dashboard
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      {/* Adding back button at the top */}
      <div className={styles.backButtonContainer}>
        <Link href="/" >
          <IoArrowBack size="1.5em"></IoArrowBack>
        </Link>
      </div>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2 className={styles.formTitle}>Admin Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={styles.inputField}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}
