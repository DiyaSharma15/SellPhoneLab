import React from "react";
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import styles from "./PhoneRepairs.module.css";

export default function PhoneRepairs() {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.pageHeader}>
            <h1>Phone Repairs</h1>
          </div>

          <div className={styles.section}>
            <p>Welcome to Sellphone Lab, your one-stop-shop for all your phone repair needs in Calgary.
              Whether you have a cracked screen, a dead battery, or something more complex like software 
              issues, our team of expert technicians is here to help. We are committed to providing you 
              with the highest quality service at an affordable price.</p>

            <p>When it comes to phone repairs, we know that every situation is unique. 
              That’s why we offer a wide range of services to meet your specific needs.</p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.subHeader}>Our services include: </h3>
            <div className={styles.serviceList}>
              <div className={styles.serviceItem}>
                <h4>Screen Replacement</h4>
                <p>If you have a cracked or damaged screen, we can replace it with a brand new one. 
                  We use only the highest quality screens to ensure that your phone looks and works like 
                  new. Our technicians are experts at replacing screens, and we guarantee that you will 
                  be satisfied with the results.</p>
              </div>
              <div className={styles.serviceItem}>
                <h4>Battery Replacement</h4>
                <p>A dead battery can be a real pain, and it can be frustrating when you can’t use your 
                  phone when you need it most. We can replace your battery with a brand new one, so you 
                  can get back to using your phone without interruption. We also offer battery calibration
                  services to ensure that your phone’s battery life is optimized.</p>
              </div>
              <div className={styles.serviceItem}>
                <h4>Water Damage Repair</h4>
                <p>Accidents happen, and sometimes your phone gets wet. If your phone has been submerged in
                  water, bring it to us right away. We have the tools and expertise to diagnose and repair 
                  any damage caused by water. We can even recover lost data if possible.</p>
              </div>
              <div className={styles.serviceItem}>
                <h4>Board Repair</h4>
                <p>If your phone is not working properly, it could be a problem with the board. 
                  Our technicians are experts at troubleshooting and repairing board issues. We 
                  use only the highest quality parts to ensure that your phone is repaired properly and 
                  works like new.</p>
              </div>
              <div className={styles.serviceItem}>
                <h4>Mic and Speaker Replacement</h4>
                <p>If you’re having trouble hearing or being heard on your phone, it could be an issue with
                  the microphone or speaker. We can diagnose and repair any problems with your phone’s audio
                    components, so you can make and receive calls without any issues.</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <p>In addition to phone repairs, we also offer computer repairs, sell phone accessories, 
              data transfer and management, unlock phones, and the sale of new and used phones. We also 
              have a wide selection of mobile cases to protect your phone from scratches and damage.</p>
            <p>At Sellphone Lab, we understand that your phone is an important part of your daily life. 
              That’s why we are committed to providing you with the best service possible. Our team of 
              experienced technicians is dedicated to getting your phone back to you in a timely manner, 
              so you can get back to using it.</p>
            <p>If you’re looking for a reliable, affordable phone repair shop in Calgary, look no further 
              than Sellphone Lab. We guarantee that you will be satisfied with our services and will build 
              trust on the Name “Sellphone Lab in Calgary”. Our goal is to provide you with the highest 
              quality service and to make sure you’re completely satisfied. So, please give us a call or 
              visit us today!</p>
          </div>
        </div>
      </div>
      <Footer/> 
    </div>
  );
}