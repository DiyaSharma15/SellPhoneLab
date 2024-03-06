//Repair process component to display selected model and take user through repair process
"use client";

//Import React && ______
import React from 'react';
import styles from './RepairProcess.module.css';
import RepairTypeSelector from './RepairTypeSelector';
import globalStyles from '../../globals.css';

const RepairProcess = ({ selectedModel }) => {
  //Pass selected model OBJECT, can use any information attached to it.
  return (
    <div className={styles.container}>
      {selectedModel ? (
        <>
          <div className={styles.deviceDetails}>
            <div className="globalTitle">Repair Process for {selectedModel.name}</div>
            <img src={selectedModel.image} alt={`Repair for ${selectedModel.name}`} style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }} />
            <div className="globalText">Quick blurb about repairing the {selectedModel.name}.</div>
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

