"use client";
import React from "react";
import Header from "../components/Header"
import Head from "next/head";
import styles from "./About.module.css"

export default function About() {
    return (
        <div className={styles.container}>
            <Header/>
            <Head>
                <title>About Us - Sellphone Lab</title>
                <meta name="description" content="Learn more about Sellphone Lab, your ultimate destination for cell phone, computer, and tablet requirements." />
            </Head>
            
            
                <div className={styles.main}>
                    <div className={styles.aboutContainer}>
                        <img src="/assets/images/about/mobile-phones-14-1024x576.jpg" alt="About Image" className={styles.aboutImage}/>
                    <div className={styles.aboutText}>
                        <h1>About Us</h1>
                            <p>Welcome to Sellphone Lab, your ultimate destination for all your cell phone, computer, and tablet requirements. Whether you&apos;re contending with a cracked screen, software glitches, or on the lookout for a new device, our comprehensive array of services and products has got you covered.</p>

                            <p>At Sellphone Lab, we take pride in delivering prompt and high-quality mobile repair and unlocking services, ensuring the utmost customer satisfaction.</p>

                            <p>As your one-stop shop for cell phone, computer, and tablet repair and maintenance, we excel at fixing or replacing any part or facilitating on-the-spot upgrades. In fact, we offer same-day repairs, allowing you to wait comfortably while we restore your device.</p>

                            <p>Known for our friendly and reliable service, whether you&apos;re seeking the latest gadget or need to revive an aging iPhone, we&apos;re here to assist you every step of the way.</p>
                    </div>
                    {/* <div className={styles.aboutContainer}>
                        <div className={styles.aboutText}>
                        <img src="/assets/images/about/mobile-phones-9-1024x576.jpg" alt="Experience" className={styles.aboutImage}/>
                            <h1>We&apos;re Experienced</h1>
                            <p>Our techs are trained professionals and ready to help you with any of your device repairs or upgrades. We offer Lcd replacement, battery replacement, water damage repair and board repair services.

                            We sell both new and used mobile phones. All of our used phones are thoroughly tested and inspected by our technicians.</p>

                        </div>
                        <div className={styles.aboutText}>
                        <img src="/assets/images/about/mobile-phones-6-1024x576.jpg" alt="Experience" className={styles.aboutImage}/>
                            <h1>Our Goal and Commitment</h1>
                            <p>Our main goal is to maintain and exceed the expectations of our customers. Our friendly, professional and experienced staff is committed to providing you with a pleasant experience each time you interact with us.

                                We are committed to giving you the best mobile repair and sales experience. We will provide you with reliable services for a very low price. Contact us today!</p>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        
        </div>
    );
    }