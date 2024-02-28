// Importing React and the useState hook for managing component state.
import React, { useState } from 'react';
// Importing an icon from React Icons package for use as a back button.
import { IoArrowBackCircle } from "react-icons/io5";
// Import CSS module for styling.
import styles from './DeviceSelection.module.css';

// Define the DeviceSelection component with props for the device types and a callback function for when a model is selected.
const DeviceSelection = ({ deviceTypes, onModelSelect }) => {
  // State to keep track of the currently selected brand, device type, and series.
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedDeviceType, setSelectedDeviceType] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);

  // Function to reset the selected device type and series when navigating back.
  const resetSelection = () => {
    setSelectedDeviceType(null);
    setSelectedSeries(null);
  };

  // Render the component UI.
  return (
    <div className={styles.selectionContainer}>
      {/* If no brand is selected, display all brands for selection. */}
      {!selectedBrand && (
        deviceTypes.map((brand, index) => (
          <div key={index} className={styles.item} onClick={() => setSelectedBrand(brand)}>
            <img src={brand.image} alt={`${brand.brand} logo`} />
            <p>{brand.brand}</p>
          </div>
        ))
      )}

      {/* If a brand is selected but no device type is selected, display device types of the selected brand. */}
      {selectedBrand && !selectedDeviceType && (
        <>
          <IoArrowBackCircle onClick={() => setSelectedBrand(null)} className={styles.backIcon} />
          {selectedBrand.models.map((model, index) => (
            <div key={index} className={styles.item} onClick={() => setSelectedDeviceType(model)}>
              <img src={model.image} alt={model.name} />
              <p>{model.name}</p>
            </div>
          ))}
        </>
      )}

      {/* If a device type is selected, display the series or devices under that type. */}
      {selectedDeviceType && (
        <>
          <IoArrowBackCircle onClick={resetSelection} className={styles.backIcon} />
          {selectedDeviceType.series.map((serie, index) => (
            serie.devices.map((device, deviceIndex) => (
              <div key={deviceIndex} className={styles.item} onClick={() => onModelSelect(device.name)}>
                <img src={device.image} alt={device.name} />
                <p>{device.name}</p>
              </div>
            ))
          ))}
        </>
      )}
    </div>
  );
};

export default DeviceSelection;
