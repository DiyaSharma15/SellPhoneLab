import React, { useState } from "react";
import styles from"../cssFiles/TradeInAssessment.module.css";
import iphoneModels from "./phonesTrade-in.json";

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
        const device = iphoneModels.find((item) => item.name === selectedDevice);
        if (device){
            setPrice(device.price);
        }
        else {
            setPrice(null);
        }
    };

    //Render UI
    return(
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <h1>Trade-in assessment</h1>
                <h2>Trade-in your device and save.</h2>
            </div>
            {/* Description */}
            <div className={styles.descriptionBox}>
                <div className={styles.description}>
                    <h2>Find out how much your device is worth</h2>
                    <h6>This is a preliminary estimate of your device. To determine the exact trade-in value, visit a SellPhone Lab store.</h6>
                </div>
            </div>
            
            {/* Device Selection Dropdown */}
            <div className={styles.deviceSelection}>
                <div>
                    <label>Select your device: </label>
                    <select onChange={handleDeviceSelection}>
                        <option value="">Select Device</option>
                        {iphoneModels.map((item, index) => (
                            <option key={index} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>  
            </div>  
            {/* Display Price */}
            <div className={styles.displayPrice}>
                {price !== null && (
                    <div>
                        {price === 0 ? (
                            <p>This phone needs further review. Please vist a SellPhone Lab store for more information.</p>
                        ) : (
                            <>
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