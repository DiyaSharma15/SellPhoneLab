import React, { useState } from "react";
import styles from "../../cssFiles/RepairForm.module.css";

export default function RepairForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        problemDescription: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //TODO: Database logic for submission
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            problemDescription: "",
        });
    };

    return(
        <div className={styles.repairFormContainer}>
            <h1>Book a Repair</h1>
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
    )
}