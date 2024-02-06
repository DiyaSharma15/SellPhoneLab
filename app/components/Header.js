import React from "react";
import Link from "next/link";
import styles from "../cssFiles/Header.module.css";

export default function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href={"/Test"}>
                            <img src="sellphonelab\public\assets\icons\logo.png" alt="SellPhoneLab Logo" className={styles.image}/>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href={"/Test"}>
                            <a className={styles.navLink}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href={"/Test"}>
                            <a className={styles.navLink}>We Repair</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href={"/Test"}>
                            <a className={styles.navLink}>Accessories</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href={"/Test"}>
                            <a className={styles.navLink}>What we do</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href={"/Test"}>
                            <a className={styles.navLink}>About</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href={"/Test"}>
                            <a className={styles.navLink}>Blog</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link legacyBehavior href={"/Test"}>
                            <a className={styles.navLink}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
