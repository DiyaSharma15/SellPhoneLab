//Repair process component to display selected model and take user through repair process
"use client";

//Import React && ______
import React, { useState } from "react";
import styles from "./RepairProcess.module.css";
import RepairTypeSelector from "./RepairTypeSelector";
import RepairForm from "./RepairForm";
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";
import AppointmentSelection from "./AppointmentSelection";
import Image from 'next/image';

const RepairProcess = ({ selectedModel }) => {
  //Pass selected model OBJECT, can use any information attached to it.
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const stepsTotal = 3; //Adjust for number of steps
  const calculateProgress = () => (currentStep / stepsTotal) * 100;

  //Function to get title for other steps
  const getTitle = () => {
    switch (currentStep) {
      case 1:
        return "Select Your Service Type(s):";
      case 2:
        return "Select Your Store & Appointment Time:";
      case 3:
        return "Customer Information";
      default:
        return ""; //Fallback title can change
    }
  };

  const handleNextStep = () => {
    //Logic to move to the next step
    if (currentStep < stepsTotal) {
      setCurrentStep(currentStep + 1);
    } else {
      //Final step logic goes here
    }
  };

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
            <div className="globalTitle">
              Repair Process for {selectedModel.name}
            </div>
            <Image
              src={selectedModel.image}
              alt={`Repair for ${selectedModel.name}`}
              layout="responsive"
              width={500} // Example width, adjust as necessary
              height={300} // Example height, adjust to maintain the aspect ratio
              objectFit="contain" // This ensures the image scales nicely. Use "cover" if you want it to fill the container.
            />
            <div className="globalText">
              Quick blurb about repairing the {selectedModel.name}.
            </div>
          </div>
          <div className={styles.repairSteps}>
            <div className="globalTitle">{getTitle()}</div>
            <ProgressBar
              percent={calculateProgress()}
              filledBackground="linear-gradient(to right, #2e3192, #1bffff)"
            />
            {currentStep === 1 && (
              <RepairTypeSelector setSelectedTypes={setSelectedTypes} />
            )}
            {currentStep === 2 && (
              <AppointmentSelection
                setSelectedLocation={setSelectedLocation}
                setSelectedDateTime={setSelectedDateTime}
              />
            )}
            {currentStep === 3 && (
              <RepairForm
                selectedModel={selectedModel.name}
                selectedLocation={selectedLocation}
                selectedDateTime={selectedDateTime}
                selectedTypes={selectedTypes}
              />
            )}
            {/* TODO: Other Steps */}
            {currentStep < stepsTotal && (
              <button
                className="globalForwardArrowButton"
                onClick={handleNextStep}
              >
                <IoArrowForwardCircle style={{ fontSize: "40px" }} />
              </button>
            )}
          </div>
        </>
      ) : (
        <p>No model selected.</p>
      )}
    </div>
  );
};

export default RepairProcess;
