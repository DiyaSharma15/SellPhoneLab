// AppointmentSelection.js

import React, { useState } from 'react';

const AppointmentSelection = ({ setSelectedLocation, setSelectedDate }) => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    //Placeholder function for logic to fetch available dates from firebase
    const fetchAvailableDates = async (selectedLocation) => {
        //Fetch dates from Firebase and set some state here
    };

    return (
        <div>
            <div>
                <label htmlFor="location">Select Location:</label>
                <select
                    id="location"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                        setSelectedLocation(e.target.value);
                        fetchAvailableDates(e.target.value);
                    }}
                >
                    <option value="calgary">SE Calgary</option>
                    <option value="airdrie">Airdrie</option>
                </select>
            </div>

            <div>
                <label htmlFor="date">Select Date:</label>
                <input 
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value);
                        setSelectedDate(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default AppointmentSelection;