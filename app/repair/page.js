"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import deviceTypes from "./deviceData";
import Footer from '../components/Footer';
import DeviceSelection from "./components/DeviceSelection";
import RepairProcess from "./components/RepairProcess";

export default function Repair() {
  // State Variables for selecting device type, device model, and series
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedDeviceType, setSelectedDeviceType] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  //UseEffect to query URL and find previously selected brand
  useEffect(() => {
    // This function parses the query string and updates state accordingly
    const parseQueryString = () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const brand = urlParams.get('selectedBrand');
      if (brand) {
        setSelectedBrand(brand);
      }
    };

    parseQueryString();
  }, []);

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
      <Header />
      {!selectedModel && ( // This line ensures DeviceSelection is only shown when no model is selected
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
      )}
      {selectedModel && ( // This line ensures RepairForm is shown only when a model is selected
        <RepairProcess
         selectedModel={selectedModel}
        />
      )}
      <Footer />
    </div>
  );
}