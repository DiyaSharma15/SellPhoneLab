// AppointmentSelection.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentSelection = ({ setSelectedLocation, setSelectedDateTime }) => {
    const [location, setLocation] = useState('');

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
                        // Assuming fetchAvailableDates will adjust available dates in DatePicker
                        // fetchAvailableDates(e.target.value);
                    }}
                >
                    <option value="">Please select a location</option>
                    <option value="calgary">SE Calgary</option>
                    <option value="airdrie">Airdrie</option>
                </select>
            </div>

            <div>
                <label htmlFor="date">Select Date and Time:</label>
                <DatePicker
                    inline // Keeps the calendar always visible
                    selected={new Date()} // Simplified to directly use a new Date() object
                    onChange={setSelectedDateTime} // Directly updates parent state
                    showTimeSelect
                    dateFormat="Pp"
                    timeFormat="HH:mm"
                    minDate={new Date()} // Prevents past dates from being selected
                    // Additional props like minTime and maxTime can be used to restrict time selection
                />
            </div>
        </div>
    );
};

export default AppointmentSelection;
