// Importing React library and necessary hooks
import React, { useState } from "react";
// Importing CSS module for styling the component
import styles from "../cssFiles/TradeInAssessment.module.css";
// Importing the list of iPhone models from a local JSON file for the dropdown options
import iphoneModels from "./phonesTrade-in.json";

// Defining the Trade-in Assessment Component using a functional component approach
export default function TradeIn_Assessment() {
    // State Variables:
    // selectedDevice - to store the currently selected device from the dropdown
    // price - to store the trade-in price for the selected device
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [price, setPrice] = useState(null);

    // Device Selection Handler:
    // This function is triggered when a user selects a device from the dropdown menu
    const handleDeviceSelection = (event) => {
        // Extracting the selected device's name from the event target
        const selectedDevice = event.target.value;
        // Updating the selectedDevice state with the new value
        setSelectedDevice(selectedDevice);

        // Set price based on selected device:
        // Searching for the selected device in the iphoneModels array to find its price
        const device = iphoneModels.find((item) => item.name === selectedDevice);
        // If the device is found, update the price state with the device's price
        if (device) {
            setPrice(device.price);
        } else {
            // If the device is not found, reset the price state to null
            setPrice(null);
        }
    };


    // Rendering the Trade-in Assessment Component
    return (
        <div className={styles.container}>
            {/* Header Section */}
            <div className={styles.header}>
                <h1>Trade-in assessment, Trade-in your device and save.</h1>
            </div>

            {/* Description Section */}
            <div className={styles.description}>
                <h2>Find out how much your device is worth</h2>
                <h6>This is a preliminary estimate of your device. To determine the exact trade-in value, visit a SellPhone Lab store.</h6>
            </div>

            {/* Device Selection Dropdown */}
            <div className={styles.deviceSelection}>
                <div>
                    <label>Select your device: </label>
                    <select onChange={handleDeviceSelection}>
                        <option value="">Select Device</option>
                        {/* Mapping over the iphoneModels array to create a dropdown option for each device */}
                        {iphoneModels.map((item, index) => (
                            <option key={index} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Display Price Section */}
            <div className={styles.displayPrice}>
                {/* Conditionally rendering the price information only if a price has been set */}
                {price !== null && (
                    <div>
                        {/* If the price is 0, display a message requiring further review */}
                        {price === 0 ? (
                            <p>This phone needs further review. Please vist a SellPhone Lab store for more information.</p>
                        ) : (
                            <>
                                {/* Displaying the trade-in price for the selected device */}
                                <h3>Trade-in price for {selectedDevice}: </h3>
                                <p>${price}</p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
