import React, { useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import styles from './DeviceSelection.module.css'; // Update this path to your CSS module

const DeviceSelection = ({ deviceTypes, onModelSelect }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedDeviceType, setSelectedDeviceType] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);

  const resetSelection = () => {
    setSelectedDeviceType(null);
    setSelectedSeries(null);
  };

  return (
    <div className={styles.selectionContainer}>
      {!selectedBrand && (
        deviceTypes.map((brand, index) => (
          <div key={index} className={styles.item} onClick={() => setSelectedBrand(brand)}>
            <img src={brand.image} alt={`${brand.brand} logo`} />
            <p>{brand.brand}</p>
          </div>
        ))
      )}

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
