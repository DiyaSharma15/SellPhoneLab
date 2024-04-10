"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../cssFiles/Header.module.css"; // Adjust the path as necessary
import { MdArrowDropDown, MdArrowDropUp, MdMenu } from "react-icons/md";
import { auth } from "/firebase-config"; // Adjust the path to your Firebase config file
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [isCompanyDropdownVisible, setIsCompanyDropdownVisible] =
    useState(false);
  const [isRepairDropdownVisible, setIsRepairDropdownVisible] = useState(false);
  const [isWhatWeDoDropdownVisible, setIsWhatWeDoDropdownVisible] =
    useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          src="/assets/icons/logo.png"
          alt="SellPhoneLab Logo"
          className={styles.image}
        />
      </Link>
      <div
        className={styles.mobileMenuIcon}
        onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
      >
        <MdMenu size="1.5em" />
      </div>
      <nav>
        <ul
          className={`${styles.navList} ${
            isMobileMenuVisible ? styles.mobileVisible : ""
          }`}
        >
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => setIsCompanyDropdownVisible(true)}
            onMouseLeave={() => setIsCompanyDropdownVisible(false)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Company
              <div
                onClick={() =>
                  setIsCompanyDropdownVisible(!isCompanyDropdownVisible)
                }
                style={{ display: "flex", alignItems: "center" }}
              >
                {isCompanyDropdownVisible ? (
                  <MdArrowDropUp />
                ) : (
                  <MdArrowDropDown />
                )}
              </div>
            </div>
            {isCompanyDropdownVisible && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/locations">Locations</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => setIsRepairDropdownVisible(true)}
            onMouseLeave={() => setIsRepairDropdownVisible(false)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Link href={{ pathname: "/repair" }}>Repair</Link>
              <div
                onClick={() =>
                  setIsRepairDropdownVisible(!isRepairDropdownVisible)
                }
                style={{ display: "flex", alignItems: "center" }}
              >
                {isRepairDropdownVisible ? (
                  <MdArrowDropUp />
                ) : (
                  <MdArrowDropDown />
                )}
              </div>
            </div>
            {isRepairDropdownVisible && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <Link
                    href={{
                      pathname: "/repair",
                      query: { selectedBrand: "Apple" },
                    }}
                  >
                    Apple
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href={{
                      pathname: "/repair",
                      query: { selectedBrand: "Samsung" },
                    }}
                  >
                    Samsung
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href={{
                      pathname: "/repair",
                      query: { selectedBrand: "Google" },
                    }}
                  >
                    Google
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href={{
                      pathname: "/repair",
                      query: { selectedBrand: "Huawei" },
                    }}
                  >
                    Huawei
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href={{
                      pathname: "/repair",
                      query: { selectedBrand: "LG" },
                    }}
                  >
                    LG
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href={{
                      pathname: "/repair",
                      query: { selectedBrand: "Others" },
                    }}
                  >
                    Other Phones
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/accessories">Accessories</Link>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => setIsWhatWeDoDropdownVisible(true)}
            onMouseLeave={() => setIsWhatWeDoDropdownVisible(false)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <a href={{ pathname: "/what-we-do" }}>What we do</a>
              <div
                onClick={() =>
                  setIsWhatWeDoDropdownVisible(!isWhatWeDoDropdownVisible)
                }
                style={{ display: "flex", alignItems: "center" }}
              >
                {isWhatWeDoDropdownVisible ? (
                  <MdArrowDropUp />
                ) : (
                  <MdArrowDropDown />
                )}
              </div>
            </div>
            {isWhatWeDoDropdownVisible && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdownItem}>
                  <Link href={{ pathname: "/what-we-do/UnlockPhones" }}>
                    Unlock Phones
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href={{ pathname: "/what-we-do/PhoneRepairs" }}>
                    Phone Repairs
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href={{ pathname: "/computerRepairs" }}>
                    Computer Repairs
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href={{ pathname: "/dataTransfer" }}>
                    Data Transfer / Management
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href={{ pathname: "/what-we-do/phone-accessories" }}>
                    Phone Accessories
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href={{ pathname: "/saleOfPhones" }}>
                    Sale of new & used phones
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href={{ pathname: "/saleOfCases" }}>
                    Sale of Mobile Cases
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/blog">Blog</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className={styles.navItem}>
                <Link href="/admin/">Admin Dashboard</Link>
              </li>
              <li className={styles.navItem} onClick={handleLogout}>
                <a style={{ cursor: "pointer" }}>Logout</a>
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
