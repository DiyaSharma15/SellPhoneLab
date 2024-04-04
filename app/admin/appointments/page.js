"use client";

import React, { useEffect, useState } from 'react';
import { db } from '/firebase-config'; // Update the path to your Firebase config
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Header from '../../components/Header'; // Adjust the path as necessary
import Footer from '../../components/Footer'; 
import styles from '../components/appointments.module.css';
import deviceTypes from '../../repair/deviceData'; // Adjust the import path as necessary
import { doc, updateDoc } from 'firebase/firestore';




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

    // Refactored getAppointments function
    const getAppointments = async () => {
        const querySnapshot = await getDocs(collection(db, 'appointments'));
        setAppointments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    useEffect(() => {
        getAppointments();
    }, []);

    const selectAppointment = (appointment) => {
        setSelectedAppointment(appointment);
    };

    const markAppointmentAsComplete = async (appointmentId) => {
        const appointmentRef = doc(db, 'appointments', appointmentId);
        await updateDoc(appointmentRef, {
            status: 'Complete' // Assuming you're updating a 'status' field. Adjust as necessary.
        });
        // Refresh the appointments list to reflect the update
        await getAppointments();
        // If you're using the selectedAppointment state, update it as well
        if (selectedAppointment && selectedAppointment.id === appointmentId) {
            setSelectedAppointment({ ...selectedAppointment, status: 'Complete' });
        }
    };


    const pendingAppointments = appointments.filter(appointment => appointment.status === 'Pending');
    const completeAppointments = appointments.filter(appointment => appointment.status === 'Complete');

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.appointmentsLayout}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="globalTitle">Pending Appointments</div>
                    <ul className={styles.appointmentList}>
                        {pendingAppointments.map(appointment => (
                            <li key={appointment.id} className={styles.appointmentItem} onClick={() => selectAppointment(appointment)}>
                                <p><strong>Store: </strong> {appointment.location}</p>
                                <p><strong>Services:</strong> {appointment.repairTypes ? appointment.repairTypes.join(', ') : 'No services listed'}</p>
                                <p><strong>Date/Time: </strong>{appointment.startDateTime?.toDate().toLocaleString()}</p>
                                <p><strong>Status: </strong>{appointment.status}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="globalTitle">Completed Appointments</div>
                    <ul className={styles.appointmentList}>
                        {/* This will be filled similarly to pending appointments once you start adding completed ones */}
                        {completeAppointments.map(appointment => (
                            <li key={appointment.id} className={styles.appointmentItem} onClick={() => selectAppointment(appointment)}>
                                <p><strong>Store: </strong> {appointment.location}</p>
                                <p><strong>Services:</strong> {appointment.repairTypes ? appointment.repairTypes.join(', ') : 'No services listed'}</p>
                                <p><strong>Date/Time: </strong>{appointment.startDateTime?.toDate().toLocaleString()}</p>
                                <p><strong>Status: </strong>{appointment.status}</p>
                            </li>
                        ))}
                    </ul>
                </div>

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
                            <button className={styles.pageButton} onClick={() => {
                                //Edit action here
                            }}>
                                Edit
                            </button>
                            <button className={styles.pageButton}
                            onClick={() => {
                                const isConfirmed = window.confirm('Are you sure you want to mark this appointment as complete?');
                                if (isConfirmed) {
                                    markAppointmentAsComplete(selectedAppointment.id);
                                    // Optionally reset the selectedAppointment or update its state to reflect the change
                                    setSelectedAppointment({ ...selectedAppointment, status: "Complete" });
                                }
                            }}
                            >
                                Mark as Complete
                            </button>
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
