import React, { useState } from "react";
import styles from"../cssFiles/TradeInAssessment.module.css";

//Trade-in Assessment Component 
export default function TradeIn_Assessment(){
    //State Variables
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [price, setPrice] = useState(null);

    //Device Selection Handler 
    const handleDeviceSelection = (event) => {
        const selectedDevice = event.target.value;
        setSelectedDevice(selectedDevice);

        //Set price based on selected device 
        if (selectedDevice === "iphone 13"){
            setPrice(400);
        }
        else if (selectedDevice === "iphone 14"){
            setPrice(460);
        }
    };

    //Render UI
    return(
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                Trade-in assessment
                Trade-in your device and save.
            </div>
            {/* Description */}
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
                        <option value="iphone 13">iphone 13</option>
                        <option value="iphone 14">iphone 14</option>
                    </select>
                </div>  
            </div>  
            {/* Display Price */}
            <div className={styles.displayPrice}>
                {price&& (
                    <div>
                        <h3>Trade-in price for {selectedDevice}: </h3>
                        <p>${price}</p>
                    </div>
                )}
            </div>
        </div>
    );
}