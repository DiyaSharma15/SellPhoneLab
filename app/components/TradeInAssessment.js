import React, { useState } from "react";
import styles from "../cssFiles/TradeInAssessment.module.css"; // Ensure updated styles are correctly imported
import iphoneModels from "./phonesTrade-in.json";

export default function TradeInAssessment() {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [price, setPrice] = useState("");

  const handleDeviceSelection = (event) => {
    const selected = event.target.value;
    setSelectedDevice(selected);

    const device = iphoneModels.find((item) => item.name === selected);
    setPrice(device ? device.price : null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Trade-in Assessment</h1>
        <p>Trade in your device and save.</p>
      </header>
      <section className={styles.description}>
        <h2>Find out how much your device is worth</h2>
        <p>
          This is a preliminary estimate of your device. To determine the exact
          trade-in value, visit a SellPhone Lab store.
        </p>
      </section>
      <section className={styles.deviceSelection}>
        <label htmlFor="deviceSelect">Select your device: </label>
        <select
          id="deviceSelect"
          value={selectedDevice}
          onChange={handleDeviceSelection}
        >
          <option value="">Select Device</option>
          {iphoneModels.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </section>
      <section className={styles.displayPrice}>
        {price && (
          <div>
            {price === 0 ? (
              <p>
                This phone needs further review. Please visit a SellPhone Lab
                store for more information.
              </p>
            ) : (
              <>
                <h3>Trade-in price for {selectedDevice}: </h3>
                <p>${price}</p>
              </>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
