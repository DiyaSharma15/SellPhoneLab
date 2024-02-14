"use client";

import React, { useState } from "react";
import Header from "../components/Header"
import styles from "../cssFiles/RepairForm.module.css"

export default function Repair() {
  //State variables to hold form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    problemDescription: "",
  })

  //Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: Logic for form submission
    console.log("Form submitted with data:", formData);
    //Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      problemDescription: "",
    });
  };

  //Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
   });
  };

    return (
        <div>
          <Header/>
          <div className={styles.layoutContainer}>
            <div className={styles.leftSpace}>
              {/* TODO: Left space */}
            </div>
            <div className={styles.repairFormContainer}>
            <h2>Book a Repair</h2>
            <form className={styles.repairForm} onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="address">Address</label>
              <input 
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <label htmlFor="problemDescription">Problem Description:</label>
                <textarea
                    id="problemDescription"
                    name="problemDescription"
                    value={formData.problemDescription}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>    
    );
}
