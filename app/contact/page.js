"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentForm from "../components/AppointmentForm";
import styles from "./ContactPage.module.css";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <AppointmentForm />
        <div className={styles.content}>
          <Image
            src="/assets/images/about/mobile-phones-6-1024x576.jpg"
            alt="Mobile Phones"
            width={1024}
            height={576}
          />
          <div className="globalText">
            Here at the Sellphone Lab, we offer high quality repairs, phones and
            accessories and our technicians are highly qualified. Visit our
            store today and let us inspect your phone. We are confident that you
            will be back! Testing
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
