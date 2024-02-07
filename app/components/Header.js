import React from "react";
import Link from "next/link";
import styles from "../cssFiles/Header.module.css"; // Adjust the path as necessary

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <img src="/assets/icons/logo.png" alt="SellPhoneLab Logo" className={styles.image}/>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/repair">
                            We Repair
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/accessories">
                            Accessories
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/what-we-do">What We Do</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
