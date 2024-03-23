import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { db } from '/firebase-config';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import styles from './AppointmentSelection.module.css';

const AppointmentSelection = ({ setSelectedLocation, setSelectedDateTime }) => {
    const [location, setLocation] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [unavailableTimes, setUnavailableTimes] = useState([]);

    const minTime = new Date(selectedDate);
    minTime.setHours(9, 0, 0, 0);

    const maxTime = new Date(selectedDate);
    maxTime.setHours(17, 0, 0, 0);

    // Function to fetch available dates
    const fetchAvailableDates = async (selectedLocation) => {
        if (!selectedLocation) return;
    
        // Adjust the selectedDate to cover the entire day
        const startOfDay = new Date(selectedDate);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(selectedDate);
        endOfDay.setHours(23, 59, 59, 999);

    
        // Convert to Firestore Timestamps
        const startDate = Timestamp.fromDate(startOfDay);
        const endDate = Timestamp.fromDate(endOfDay);
    
        const appointmentsRef = collection(db, 'appointments');
        const q = query(appointmentsRef,
            where('location', '==', selectedLocation),
            where('startDateTime', '>=', startDate),
            where('startDateTime', '<=', endDate));
    
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
            console.log("No matching documents for the day.");
            setUnavailableTimes([]);
            return;
        }
    
        const appointments = snapshot.docs.map(doc => doc.data().startDateTime.toDate());
    
        // Assuming you want to exclude these times
        setUnavailableTimes(appointments);
    };

    useEffect(() => {
        if (location) {
            fetchAvailableDates(location);
        }
    }, [location, selectedDate]);

    // Adjusted function to accurately filter unavailable times based on the selected date
    const getUnavailableTimes = (appointments, selectedDate) => {
        return appointments.filter(appointment => {
            const appointmentDate = appointment.startDateTime;
            return appointmentDate.getDate() === selectedDate.getDate() &&
                   appointmentDate.getMonth() === selectedDate.getMonth() &&
                   appointmentDate.getFullYear() === selectedDate.getFullYear();
        }).map(appointment => {
            return new Date(appointment.startDateTime);
        });
    };

    // Function to change date when selected
    const handleDateChange = (date) => {
        setSelectedDate(date); // Update local state date
        setSelectedDateTime(date); // Propagate selected date/time up to parent
    };

    return (
        <div>
            <div>
                <label htmlFor="location">Select Location:</label>
                <select
                    id="location"
                    value={location}
                    onChange={(e) => {
                        console.log("Selected location:", e.target.value);
                        setLocation(e.target.value);
                        setSelectedLocation(e.target.value);
                    }}
                >
                    <option value="">Please select a location</option>
                    <option value="Calgary">Calgary</option>
                    <option value="Airdrie">Airdrie</option>
                </select>
            </div>
            {location && (
                <div className={styles.datePickerContainer}>
                    <label htmlFor="date" className={styles.datePickerLabel}>Select Date and Time:</label>
                    <DatePicker
                        inline
                        selected={selectedDate}
                        onChange={handleDateChange}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeFormat="HH:mm"
                        minDate={new Date()}
                        excludeTimes={unavailableTimes}
                        minTime={minTime} // From 9:00 AM
                        maxTime={maxTime} // To 5:00 PM
                    />
                </div>
            )}
        </div>
    );
};

export default AppointmentSelection;
