"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import styles from "../cssFiles/RepairForm.module.css";
import deviceTypes from "./deviceData";
import Footer from '../components/Footer';
import RepairForm from "../components/RepairForm"; // Assuming this import path is correct
import DeviceSelection from "../components/DeviceSelection"; 

export default function Repair() {
  // State Variables for selecting device type, device model, and series
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedDeviceType, setSelectedDeviceType] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  // Function to reset selections based on level
  const resetSelection = (level) => {
    if (level === "brand") {
      setSelectedDeviceType(null);
      setSelectedSeries(null);
      setSelectedModel(null);
    } else if (level === "deviceType") {
      setSelectedSeries(null);
      setSelectedModel(null);
    } else if (level === "series") {
      setSelectedModel(null);
    }
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    // TODO:include logic for what happens after form submission,
    // such as sending data to an API
  };

  return (
    <div>
      <Header/>
        <DeviceSelection
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedDeviceType={selectedDeviceType}
          setSelectedDeviceType={setSelectedDeviceType}
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          deviceTypes={deviceTypes}
          resetSelection={resetSelection}
        />
        {/* TODO: Render the RepairForm component if a model has been selected */}
        {/* <RepairForm onSubmit={handleFormSubmit} /> */}
      <Footer/>
    </div>
  );
}
