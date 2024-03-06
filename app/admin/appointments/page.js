"use client";

import React, { useEffect, useState } from 'react';
import { db } from '/firebase-config'; // Update the path to your Firebase config
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Header from '../../components/Header'; // Adjust the path as necessary
import Footer from '../../components/Footer'; 
import styles from '../_components/appointments.module.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const getAppointments = async () => {
            // Adjusted to order by customerName and submittedAt.
            const querySnapshot = await getDocs(query(collection(db, 'appointments'), orderBy('customerName'), orderBy('submittedAt', 'desc')));
            setAppointments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
    
        getAppointments();
    }, []);

    return (
        <>
            <Header />
                <div className={styles.container}>
                    <h1 className={styles.title}>Appointment Requests</h1>
                    <ul className={styles.appointmentList}>
                        {appointments.map(appointment => (
                            <li key={appointment.id} className={styles.appointmentItem}>
                                <p>Name: {appointment.customerName}</p>
                                <p>Email: {appointment.email}</p>
                                <p>Device Model: {appointment.deviceModel}</p>
                                <p>Issue: {appointment.issueDescription}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            <Footer />
        </>
    );
};

export default Appointments;
