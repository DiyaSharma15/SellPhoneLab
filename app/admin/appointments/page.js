"use client";

import React, { useEffect, useState } from 'react';
import { db } from '/firebase-config'; // Update the path to your Firebase config
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Header from '../../components/Header'; // Adjust the path as necessary
import Footer from '../../components/Footer'; 
import styles from '../_components/appointments.module.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
        const getAppointments = async () => {
            const querySnapshot = await getDocs(collection(db, 'appointments'));
            setAppointments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
    
        getAppointments();
    }, []);
    
    const selectAppointment = (appointment) => {
        setSelectedAppointment(appointment);
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Appointments</h1>
                <div className={styles.appointmentsLayout}>
                    <ul className={styles.appointmentList}>
                        {appointments.map(appointment => (
                            <li key={appointment.id} className={styles.appointmentItem} onClick={() => selectAppointment(appointment)}>
                                {/* <p>Name: {appointment.firstName} {appointment.lastName}</p> */}
                                <p>Email: {appointment.email}</p>
                                <p>Device Model: {appointment.deviceModel}</p>
                                <p>Services: {appointment.repairTypes ? appointment.repairTypes.join(', ') : 'No services listed'}</p>
                                {/* <p>Issue: {appointment.issueDescription}</p>
                                <p>Submitted At: {appointment.submittedAt?.toDate().toLocaleString()}</p> */}
                            </li>
                        ))}
                    </ul>
                    {selectedAppointment && (
                        <div className={styles.appointmentDetails}>
                            <h2>Details</h2>
                            <p>Name: {selectedAppointment.firstName} {selectedAppointment.lastName}</p>
                            <p>Email: {selectedAppointment.email}</p>
                            <p>Device Model: {selectedAppointment.deviceModel}</p>
                            <p>Issue: {selectedAppointment.issueDescription}</p>
                            <p>Submitted At: {selectedAppointment.submittedAt?.toDate().toLocaleString()}</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Appointments;
