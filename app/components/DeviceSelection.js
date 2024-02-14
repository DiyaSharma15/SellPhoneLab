import React from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import styles from '../cssFiles/RepairForm.module.css'; // Assuming shared CSS for now

const DeviceSelection = ({
  selectedBrand,
  setSelectedBrand,
  selectedDeviceType,
  setSelectedDeviceType,
  selectedSeries,
  setSelectedSeries,
  selectedModel,
  setSelectedModel,
  deviceTypes,
  resetSelection
}) => {
  return (
    <div className={styles.deviceSelection}>
      {/* Brand Selection */}
      {!selectedBrand && deviceTypes.map((brand, index) => (
        <div key={index} className={styles.brandItem} onClick={() => { setSelectedBrand(brand.brand); resetSelection("brand"); }}>
          <img src={brand.image} alt={`${brand.brand} logo`} style={{width: '150px', height: '150px'}} />
          <p>{brand.brand}</p>
        </div>
      ))}

      {/* Device Type selection */}
      {selectedBrand && !selectedDeviceType && (
        <>
          <button className={styles.backButton} onClick={() => setSelectedBrand(null)}>
            <IoArrowBackCircle style={{fontSize: '30px'}} />
          </button>
          {deviceTypes.find(brand => brand.brand === selectedBrand).models.map((model, index) => (
            <div key={index} className={styles.brandItem} onClick={() => { setSelectedDeviceType(model.name); resetSelection("deviceType"); }}>
              <img src={model.image} alt={`${model.name}`} style={{width: '200px', height: 'auto'}} />
              <p>{model.name}</p>
            </div>
          ))}
        </>
      )}

      {/* Device Series Selection */}
      {selectedDeviceType && !selectedSeries && (
        <>
          <button className={styles.backButton} onClick={() => setSelectedDeviceType(null)}>
            <IoArrowBackCircle style={{fontSize: '30px'}} />
          </button>
          {deviceTypes.find(brand => brand.brand === selectedBrand).models.find(model => model.name === selectedDeviceType).series.map((serie, index) => (
            <div key={index} className={styles.brandItem} onClick={() => setSelectedSeries(serie.name)}>
              <img src={serie.image} alt={`${serie.name}`} style={{width: '200px', height: 'auto'}} />
              <p>{serie.name}</p>
            </div>
          ))}
        </>
      )}

      {/* Specific Model Selection within a Series */}
      {selectedSeries && (
        <>
          <button className={styles.backButton} onClick={() => setSelectedSeries(null)}>
            <IoArrowBackCircle style={{fontSize: '30px'}} />
          </button>
          {deviceTypes
            .find(brand => brand.brand === selectedBrand)
            .models.find(model => model.name === selectedDeviceType)
            .series.find(serie => serie.name === selectedSeries)
            .devices.map((device, index) => (
              <div key={index} onClick={() => setSelectedModel(device.name)}>
                <p>{device.name}</p>
                {/* Display device images here if available */}
              </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DeviceSelection;
