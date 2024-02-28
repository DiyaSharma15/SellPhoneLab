"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DeviceSelection from './components/DeviceSelection';
import RepairForm from './components/RepairForm';
import deviceTypes from './deviceData';


export default function Repair() {
  const [selectedModel, setSelectedModel] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setShowForm(true);
  };

  return (
    <div>
      <Header/>
      {!showForm ? (
        <DeviceSelection
          deviceTypes={deviceTypes}
          onModelSelect={handleModelSelect}
        />
      ) : (
        <RepairForm
          selectedModel={selectedModel}
          setShowForm={setShowForm}
        />
      )}
      <Footer/>
    </div>
  );
}

