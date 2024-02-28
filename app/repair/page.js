// Use client to help with fetching behavior that allows components to be rendered.
"use client";

// Import all necessary components for repair page.
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DeviceSelection from './components/DeviceSelection';
import RepairForm from './components/RepairForm';
import deviceTypes from './deviceData';

// Set up the default function for repair.
export default function Repair() {

  // State hook for the selected model that user chooses.
  const [selectedModel, setSelectedModel] = useState('');

  // State hook for controlling the display of the repair form.
  const [showForm, setShowForm] = useState(false);
  
  // This function handles the selection of a model the updates the selected model and shows the form.
  const handleModelSelect = (model) => {
    setSelectedModel(model); // Update the state with selected model.
    setShowForm(true); // This makes the form visible.
  };

  // Render function returns the UI structure for the repair page.
  return (
    <div>
      <Header/>
      {!showForm ? (
        // If the form is not shown, display the DeviceSelection component,
        // passing deviceTypes and the model selection handler as props.
        <DeviceSelection
          deviceTypes={deviceTypes}
          onModelSelect={handleModelSelect}
        />
      ) : (
        // If the form is shown, display the RepairForm component,
        // passing the selectedModel and a function to set the form visibility as props.
        <RepairForm
          selectedModel={selectedModel}
          setShowForm={setShowForm}
        />
      )}
      <Footer/> 
    </div>
  );
}

