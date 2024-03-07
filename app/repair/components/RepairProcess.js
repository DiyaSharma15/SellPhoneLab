//Repair process component to display selected model and take user through repair process
"use client";

//Import React && ______
import React, { useState } from 'react';
import styles from './RepairProcess.module.css';
import RepairTypeSelector from './RepairTypeSelector';
import RepairForm from './RepairForm';
import { ProgressBar } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";

const RepairProcess = ({ selectedModel }) => {
  //Pass selected model OBJECT, can use any information attached to it.
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const stepsTotal = 3; //Adjust for number of steps
  const calculateProgress = () => (currentStep / stepsTotal) * 100;

  const handleNextStep = () => {
    //Logic to move to the next step
    if (currentStep < stepsTotal) {
      setCurrentStep(currentStep + 1);
    } else {
      //Final step logic goes here
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
          <ProgressBar percent={calculateProgress()} filledBackground="linear-gradient(to right, #2e3192, #1bffff)" />
          <div className="globalTitle">Select Your Service Type(s):</div>
            {currentStep === 1  && <RepairTypeSelector selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />}
            {currentStep === 2 && <RepairForm />}
            {/* TODO: Other Steps */}
            <button className="globalForwardArrowButton" onClick={handleNextStep}>
              <IoArrowForwardCircle style={{fontSize: '40px'}}/>
            </button>
          </div>
        </>
      ) : (
        <p>No model selected.</p>
      )}
    </div>
  );
};

export default RepairProcess;

