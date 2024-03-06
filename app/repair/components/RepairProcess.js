//Repair process component to display selected model and take user through repair process
"use client";

//Import React && ______
import React from 'react';
import styles from './RepairProcess.module.css';
import RepairTypeSelector from './RepairTypeSelector';

const RepairProcess = ({ selectedModel }) => {
  //Pass selected model OBJECT, can use any information attached to it.
  return (
    <div className={styles.container}>
      {selectedModel ? (
        <>
          <div className={styles.deviceDetails}>
            <h2>Repair Process for {selectedModel.name}</h2>
            <img src={selectedModel.image} alt={`Repair for ${selectedModel.name}`} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>Quick blurb about repairing the {selectedModel.name}.</p>
          </div>
          <div className={styles.repairSteps}>
            <p>This section will dynamically take the user through the repair process.</p>
            <RepairTypeSelector />
          </div>
        </>
      ) : (
        <p>No model selected.</p>
      )}
    </div>
  );
};

export default RepairProcess;

