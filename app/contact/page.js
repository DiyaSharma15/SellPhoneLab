"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentForm from "../components/AppointmentForm";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className = "container">
        <div className="globalText">Contact Us</div>
        <AppointmentForm />
      </div>
      <Footer />
    </div>
  );
}
