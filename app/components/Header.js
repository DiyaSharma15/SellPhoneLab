"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../cssFiles/Header.module.css"; // Adjust the path as necessary
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export default function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem} onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <Link href="/repair">
                                Repair
                            </Link>
                            <div onClick={() => setIsDropdownVisible(!isDropdownVisible)} style={{ display: 'flex', alignItems: 'center' }}>
                                {isDropdownVisible ? <MdArrowDropUp /> : <MdArrowDropDown />}
                            </div>
                        </div>
                        {isDropdownVisible && (
                            <ul className={styles.dropdown}>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { brand: "Apple" } }}>Apple</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { brand: "Samsung" } }}>Samsung</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { brand: "Google" } }}>Google</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { brand: "Huawei" } }}>Huawei</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { brand: "LG" } }}>LG</Link>
                                </li>
                                <li className={styles.dropdownItem}>
                                    <Link href={{ pathname: "/repair", query: { brand: "Other" } }}>Other Phones</Link>
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
                </ul>
            </nav>
        </header>
    );
}
