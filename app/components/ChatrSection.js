import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../cssFiles/Chatr.module.css'; // Adjust the path as needed

const ChatrSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/assets/images/home/Sellphone-mobiles.webp" alt="Prepaid Smartphone Plans" width={400} height={400} layout="responsive" />
      </div>
      <div className={styles.content}>
        <h2>Chatr, Freedom & Lucky Mobile - Best Prepaid Smartphone Plans</h2>
        <p>Chatr, Freedom & Lucky Mobiles Prepaid plans now available at Sellphone Lab.</p>
        <p>Contact the nearest location to find out more!</p>
        <Link href="/contact" className={styles.contactButton}>Contact us</Link>
      </div>
      <div className={styles.additionalSection}>
        <div className={styles.additionalContent}>
          <h2>Looking for a Screen or Battery Replacement service in Calgary?</h2>
          <p>Our mobile technicians can make your phone like new in just 20 minutes. We upgrade phone batteries and screens at unbeatable prices. Contact us to know more about our services.</p>
          <Link href="/contact" className={styles.contactButton}>Contact us</Link>
        </div>
        <div className={styles.additionalImage}>
          <Image src="/assets/images/home/Phone-Repairs.jpg.webp" alt="New Section Image" width={400} height={400} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default ChatrSection;

