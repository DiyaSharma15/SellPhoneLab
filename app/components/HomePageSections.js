import React from "react";

// HomePage.js or HomePage.jsx

import styles from '../cssFiles/HomePage.module.css'; // Adjust the path as needed

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.title}>Price Match Guarantee</h2>
        <p>We guarantee to match the price of any local competitor for the same repair, giving you confidence that you are receiving the best possible price. Plus, we will complete the repair faster than anyone else.</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Transparent Repairs</h2>
        <p>Our repair process is transparent, meaning you will know exactly what we will fix on your device and the associated cost before we commence any work.</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Same Day Repairs</h2>
        <p>We understand your time is valuable, so we strive to return your device to you as soon as possible. In most cases, we can complete repairs in less than two hours.</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Lifetime Warranty</h2>
        <p>Our repairs come with a lifetime warranty that is valid at all of our locations worldwide, providing you with peace of mind that your device is protected for life.</p>
      </div>
    </div>
  );
}

export default HomePage;
