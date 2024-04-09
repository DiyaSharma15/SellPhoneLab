import React from "react";
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import styles from "./UnlockPhones.module.css";

export default function UnlockPhones() {
    return (
      <div>
        <Header/>
          <div className={styles.container}>
            <div className={styles.blueBox}>
              <h1>Unlock Phones</h1>
            </div>
            <div className={styles.content}>
              <div>
                <p>At Sellphone Lab in Calgary, we understand that a locked phone can be a major inconvenience. 
                  Whether you’re traveling abroad or simply looking to switch carriers, a locked phone can limit 
                  your options and make it difficult to access all the features of your device. That’s why we offer 
                  a fast and high-quality unlocking service to help you regain control of your phone and take advantage 
                  of all its capabilities.</p>
              </div>
              <div className={styles.services}>
                <div className={styles.service}>
                  <div className={styles.serviceBox}>
                    <h3>Unlocking Services</h3>
                    <div>
                      <p>At Sellphone Lab, we pride ourselves on providing our customers with the highest quality unlocking 
                        services in Calgary. Our team of experts has years of experience in unlocking all types of phones from 
                        all major carriers. Whether you’re looking to unlock a new iPhone or an older Samsung model, we can help.
                        Our process is fast, efficient, and ensures that your phone remains in excellent condition.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.service}>
                  <div className={styles.serviceBox}>
                    <h3>Customer Satisfaction</h3>
                    <div>
                      <p>At Sellphone Lab, customer satisfaction is our top priority. Our team of experts is dedicated to providing 
                        you with the best service possible. We understand that your phone is an important part of your life, and we 
                        work hard to ensure that you’re able to use it to its full potential. We believe in transparency, and we will 
                        keep you updated throughout the process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>In addition to unlocking services, we also offer a wide range of other services to meet all your tech needs. Whether
                  you need a phone repair, computer repair, or even a new or used phone, we have you covered. We also offer phone accessories, 
                  data transfer services, and mobile cases. With the help of our expert technicians and state-of-the-art technology, you can 
                  trust that your devices are in good hands. So, give us a call or stop by our shop today and let us help you unlock your 
                  phone and regain control of your device. With Sellphone Lab in Calgary, you’ll have access to all the features of your 
                  phone and have the freedom to switch carriers or use it internationally.</p>
              </div>
            </div>
          </div>
        <Footer/> 
      </div>
    );
}