import React from "react";
import Link from "next/link";
import styles from "../cssFiles/Footer.module.css";
import Image from "next/image"; // Import Image component for handling images

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactSection}>
                <h2>Contact Us</h2>
                <p>We welcome you in our store in Calgary, AB</p>
                <div className={styles.socialLinks}>
                    <Link href="https://facebook.com">facebook</Link>
                    <Link href="https://twitter.com"> Twitter</Link>
                    <Link href="https://instagram.com"> Instagram</Link>
                    <Link href="https://linkedin.com"> Linkedin</Link>
                </div>
                <div className={styles.couponImage}>
                    {/* Update the src attribute with the path to your coupon image */}
                    {/* <Image src="/path-to-your-coupon-image.jpg" alt="Coupon Code" width={100} height={100} /> */}
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
            <div className={styles.footerBottom}>
                <div>
                <Link href="/" legacyBehavior>
                    <a>
                        <Image src="/assets/icons/logo-transparent.png" alt="SellPhoneLab Logo" className={styles.image} width={60} height={60} />
                    </a>
                </Link>

                <p>&copy; 2023 Sellphone Lab Inc. | Website by Sait</p>
                </div>
            </div>
        </footer>
    );
}

