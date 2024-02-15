import React from "react";
import Link from "next/link";
import Image from "next/image"; // Make sure to use Next.js Image for optimization
import styles from "../cssFiles/Footer.module.css"; 


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContent}>
                <div className={styles.contactSection}>
                    <h2>Contact Us</h2>
                    <p>We welcome you in our store in Calgary, AB</p>
                    <div className={styles.socialLinks}>
                        <a href="https://facebook.com">
                            <img src="/assets/images/home/facebook.svg" alt="Facebook" width="20" height="20" />
                        </a>
                        <a href="https://twitter.com">
                            <img src="/assets/images/home/twitter.svg" alt="Twitter" width="20" height="20" />
                        </a>
                        <a href="https://instagram.com">
                            <img src="/assets/images/home/instagram.svg" alt="Instagram" width="20" height="20" />
                        </a>
                        <a href="https://linkedin.com">
                            <img src="/assets/images/home/linkedin.svg" alt="LinkedIn" width="20" height="20" />
                        </a>
                    </div>
                    <div className={styles.coupon}>
                        <h3>Ask us for a Loyalty Card</h3>
                        <p>Get 15% off any accessory & $15 off any repairs!</p>
                    </div>

                </div>
                <div className={styles.locations}>
                    <div className={styles.location}>
                        <h3>SellPhone Lab - Calgary, AB</h3>
                        <p>+1 403-430-2222</p>
                        <p>contact@sellphonelab.ca</p>
                        <p>36 Riverglen Dr SE Calgary, AB T2C 4L5</p>
                    </div>
                    <div className={styles.location}>
                        <h3>SellPhone Lab - Olds, AB</h3>
                        <p>+1 403-561-2020</p>
                        <p>olds@sellphonelab.ca</p>
                        <p>6214 46 St Olds, AB T4H 1M6</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom} >
            <Link href="/" legacyBehavior>
                <a>
                    <Image src="/assets/icons/logo.png" alt="SellPhoneLab Logo" className={styles.image} width={400} height={472} />
                </a>
            </Link>

                <p>&copy; 2023 Sellphone Lab Inc. | Website by Sait</p>
            </div>

        </footer>
    );
}

