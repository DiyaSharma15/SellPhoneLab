"use client";

import React, { useEffect, useState } from 'react';
import { db } from '/firebase-config'; // Update the path to your Firebase config
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Header from '../../components/Header'; // Adjust the path as necessary
import Footer from '../../components/Footer'; 
import styles from '../_components/appointments.module.css';
import deviceTypes from '../../repair/deviceData'; // Adjust the import path as necessary


const findDeviceImageUrl = (deviceModel) => {
    for (const brand of deviceTypes) {
      for (const model of brand.models) {
        for (const series of model.series) {
          for (const device of series.devices) {
            if (device.name === deviceModel) {
              return device.image; // Returns the image URL of the matched model
            }
          }
        }
      }
    }
    return null; // Return null or a default image if not found
  };
  


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
                
                <div className={styles.appointmentsLayout}>
                    
                    <ul className={styles.appointmentList}>
                    <div className="globalTitle">Appointments</div>
                        {appointments.map(appointment => (
                            <li key={appointment.id} className={styles.appointmentItem} onClick={() => selectAppointment(appointment)}>
                                {/* <p>Name: {appointment.firstName} {appointment.lastName}</p> */}
                                <p><strong>Store: </strong> {appointment.location}</p>
                                {/* <p><strong>Email:</strong> {appointment.email}</p> */}
                                {/* <p><strong>Device Model:</strong> {appointment.deviceModel}</p> */}
                                <p><strong>Services:</strong> {appointment.repairTypes ? appointment.repairTypes.join(', ') : 'No services listed'}</p>
                                <p><strong>Date/Time: </strong>{appointment.startDateTime?.toDate().toLocaleString()}</p>
                                {/* <p>Issue: {appointment.issueDescription}</p>
                                <p>Submitted At: {appointment.submittedAt?.toDate().toLocaleString()}</p> */}
                            </li>
                        ))}
                    </ul>
                    {selectedAppointment && (
                        <>
                        <div className={styles.appointmentDetails}>
                        <div className = "globalTitle">Details</div>
                            <p><strong>Name: </strong>{selectedAppointment.firstName} {selectedAppointment.lastName}</p>
                            <p><strong>Email: </strong>{selectedAppointment.email}</p>
                            <p><strong>Device Model: </strong>{selectedAppointment.deviceModel}</p>
                            <img src={findDeviceImageUrl(selectedAppointment.deviceModel)} alt={selectedAppointment.deviceModel} style={{ width: '250px', height: '250px' }} />
                            <p><strong>Services:</strong> {selectedAppointment.repairTypes ? selectedAppointment.repairTypes.join(', ') : 'No services listed'}</p>
                            <p><strong>Notes: </strong>{selectedAppointment.issueDescription}</p>
                            <p><strong>Store: </strong>{selectedAppointment.location}</p>
                            <p><strong>Appointment Date/Time: </strong>{selectedAppointment.startDateTime?.toDate().toLocaleString()}</p>
                            {/* <p>Submitted At: {selectedAppointment.submittedAt?.toDate().toLocaleString()}</p> */}
                            
                        </div>
                        </>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Appointments;
