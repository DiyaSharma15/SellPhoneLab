"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../cssFiles/Header.module.css"; // Adjust the path as necessary
import { MdArrowDropDown, MdArrowDropUp, MdMenu } from "react-icons/md";
import { auth } from '/firebase-config'; // Adjust the path to your Firebase config file
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in
    //             setIsLoggedIn(true);
    //         } else {
    //             // User is signed out
    //             setIsLoggedIn(false);
    //         }
    //     });
    //     return () => unsubscribe(); // Clean up subscription on unmount
    // }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            window.location.href = '/';
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
<header className={styles.header}>
            <Link href="/">
                <img src="/assets/icons/logo.png" alt="SellPhoneLab Logo" className={styles.image}/>
            </Link>
            <div className={styles.mobileMenuIcon} onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}>
                <MdMenu size="1.5em" />
            </div>
            <nav>
                <ul className={`${styles.navList} ${isMobileMenuVisible ? styles.mobileVisible : ""}`}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem} onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            Repair
                            <div onClick={() => setIsDropdownVisible(!isDropdownVisible)} style={{ display: 'flex', alignItems: 'center' }}>
                                {isDropdownVisible ? <MdArrowDropUp /> : <MdArrowDropDown />}
                            </div>
                        </div>
                        {isDropdownVisible && (
                            <ul className={styles.dropdown}>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { selectedBrand: "Apple" } }}>Apple</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { selectedBrand: "Samsung" } }}>Samsung</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { selectedBrand: "Google" } }}>Google</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { selectedBrand: "Huawei" } }}>Huawei</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { selectedBrand: "LG" } }}>LG</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { selectedBrand: "Others" } }}>Other Phones</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/accessories">Accessories</Link>
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
                        <Link href="/contact">Contact</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li className={styles.navItem}>
                                <Link href="/admin/">Admin Dashboard</Link>
                            </li>
                            <li className={styles.navItem} onClick={handleLogout}>
                                <a style={{cursor: 'pointer'}}>Logout</a>
                            </li>
                        </>
                    ) : (
                        <li className={styles.navItem}>
                            <Link href="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
    
}
