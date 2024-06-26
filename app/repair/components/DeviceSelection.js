import React from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import styles from './DeviceSelection.module.css'; // Assuming shared CSS for now
import globalStyles from '../../globals.css';


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

  //Set title based on current selection
  let title = "Select a Brand to Start the Repair Process.";
  if (selectedBrand && !selectedDeviceType) {
    title = `Select Your ${selectedBrand} Device`;
  } else if (selectedDeviceType && !selectedSeries) {
    title = `Select Your ${selectedDeviceType}`;
  } else if (selectedSeries){
    title = `Select Your ${selectedSeries} Model`;
  }
  return (
  <>
    <div className="globalTitle">{title}</div>
    <div className={styles.deviceSelection}>
      {/* Brand Selection */}
      {!selectedBrand && deviceTypes.map((brand, index) => (
      <div key={index} className={styles.brandItem} onClick={() => { setSelectedBrand(brand.brand); resetSelection("brand"); }}>
      <img src={brand.image} alt={`${brand.brand} logo`} style={{width: '220px', height: '150px'}} />
      <p className={styles.textStyle}>{brand.brand}</p>
    </div>
))}

      {/* Device Type selection */}
      {selectedBrand && !selectedDeviceType && (
        <>
          <button className="globalBackArrowButton" onClick={() => setSelectedBrand(null)}>
            <IoArrowBackCircle style={{fontSize: '40px'}} />
          </button>
          {deviceTypes.find(brand => brand.brand === selectedBrand).models.map((model, index) => (
            <div key={index} className={styles.brandItem} onClick={() => { setSelectedDeviceType(model.name); resetSelection("deviceType"); }}>
              <img src={model.image} alt={`${model.name}`} style={{width: '200px', height: 'auto'}} />
              <p className={styles.textStyle}>{model.name}</p>
            </div>
          ))}
        </>
      )}

      {/* Device Series Selection */}
      {selectedDeviceType && !selectedSeries && (
        <>
          <button className="globalBackArrowButton" onClick={() => setSelectedDeviceType(null)}>
            <IoArrowBackCircle style={{fontSize: '40px'}} />
          </button>
          {deviceTypes.find(brand => brand.brand === selectedBrand).models.find(model => model.name === selectedDeviceType).series.map((serie, index) => (
            <div key={index} className={styles.brandItem} onClick={() => setSelectedSeries(serie.name)}>
              <img src={serie.image} alt={`${serie.name}`} style={{width: '200px', height: 'auto'}} />
              <p className={styles.textStyle}>{serie.name}</p>
            </div>
          ))}
        </>
      )}

      {/* Specific Model Selection within a Series */}
      {selectedSeries && (
        <>
          <button className="globalBackArrowButton" onClick={() => setSelectedSeries(null)}>
            <IoArrowBackCircle style={{fontSize: '40px'}} />
          </button>
          {deviceTypes
            .find(brand => brand.brand === selectedBrand)
            .models.find(model => model.name === selectedDeviceType)
            .series.find(serie => serie.name === selectedSeries)
            .devices.map((device, index) => (
              <div key={index} className={styles.brandItem} onClick={() => setSelectedModel(device)}>
                <img src={device.image} alt={`${device.name}`} style={{ width: '200px', height: 'auto'}} />
                <p className={styles.textStyle}>{device.name}</p>
              </div>
          ))}
        </>
      )}
    </div>
  </>
  );
};

export default DeviceSelection;