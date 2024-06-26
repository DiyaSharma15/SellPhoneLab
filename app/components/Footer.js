import React from "react";
import Link from "next/link";
import Image from "next/image"; // Make sure to use Next.js Image for optimization
import styles from ".././cssFiles/BottomFooter.module.css";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContent}>
                <div className={styles.contactSection}>
                    <h2>Contact Us</h2>
                    <p>We welcome you in our store in Calgary, AB</p>
                    <div className={styles.socialLinks}>
                        <a href="https://www.facebook.com/SellPhoneLab/">
                            <img src="/assets/images/home/facebook.svg" alt="Facebook" width="20" height="20" />
                        </a>

                        <a href="https://www.instagram.com/sellphonelab/">
                            <img src="/assets/images/home/instagram.svg" alt="Instagram" width="20" height="20" />
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
                        <a href="https://www.google.com/maps/place/36+Riverglen+Dr+SE,+Calgary,+AB+T2C+4L5/@50.9763509,-114.0169997,17z/data=!3m1!4b1!4m6!3m5!1s0x537170b0be991339:0x669b1f4e1bde8990!8m2!3d50.9763476!4d-114.0144248!16s%2Fg%2F11bzzwmncv?entry=ttu">
                            <p>36 Riverglen Dr SE Calgary, AB T2C 4L5</p>
                        </a>
                        
                    </div>
                    <div className={styles.location}>
                        <h3>SellPhone Lab - Olds, AB</h3>
                        <p>+1 403-561-2020</p>
                        <p>olds@sellphonelab.ca</p>
                        <a href="https://www.google.com/maps/place/6214+46+St,+Olds,+AB+T4H+1M6/@51.7957183,-114.130717,17z/data=!3m1!4b1!4m6!3m5!1s0x537410f32a331a79:0x41c9375c3dcc69fa!8m2!3d51.795715!4d-114.1281421!16s%2Fg%2F11b8v6g96h?entry=ttu">
                            <p>6214 46 St Olds, AB T4H 1M6</p>
                        </a>
                    </div>
                    <div className={styles.location}>
                        <h3>SellPhone Lab - Cochrane, AB</h3>
                        <p>+1 403-449-3030</p>
                        <p>cochrane@sellphonelab.ca</p>
                        <a href="https://www.google.com/maps/place/122+4+Ave+W+%236,+Cochrane,+AB+T4C+1A9/@51.1917259,-114.4709212,16z/data=!3m1!4b1!4m6!3m5!1s0x5371409dc7cecfb1:0xd412f78bc3621445!8m2!3d51.1917259!4d-114.4709212!16s%2Fg%2F11n_z8g515?entry=ttu">
                            <p>#6, 122, 4th Avenue West, Cochrane, AB T4C 1A9</p>
                        </a>
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
