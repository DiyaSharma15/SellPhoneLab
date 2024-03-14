import React, { useState } from 'react';
import styles from "./RepairTypeSelector.module.css";


const RepairTypeSelector = ({ setSelectedTypes }) => {
    const [selectedTypeNames, setSelectedTypeNames] = useState([]);

    const repairOptions = [
        { id: 'charging', name: 'Charge Port Replacement' },
        { id: 'water', name: 'Water Damage/Advanced Diagnostic' },
        { id: 'rcamera', name: 'Rear Camera Replacement' },
        { id: 'fcamera', name: 'Front Camera Replacement' },
        { id: 'DOAData', name: 'Doa Data Transfer' },
        { id: 'data', name: 'Data Transfer' },
        { id: 'earpiece', name: 'Earpiece Replacement' },
        { id: 'screen', name: 'Screen Assembly Replacement' },
        { id: 'speaker', name: 'Loudspeaker Replacement' },
        { id: 'battery', name: 'Battery Replacement' },
        { id: 'lens', name: 'Camera Lens Replacement' },
        { id: 'rear', name: 'Rear Glass/Housing Replacement' },
    ];

    const handleSelectionChange = (selectedId) => {
        const option = repairOptions.find(option => option.id === selectedId);
        setSelectedTypeNames(prev => {
            const newSelectedNames = prev.includes(option.name) ? prev.filter(name => name !== option.name) : [...prev, option.name];
            setSelectedTypes(newSelectedNames); // Update the parent state
            return newSelectedNames;
        });
    };

    return (
        <div className={styles.container}>
            {repairOptions.map((option) => (
                <div key={option.id} className={styles.option}>
                    <input
                        type="checkbox"
                        id={option.id}
                        className={styles.checkbox}
                        checked={selectedTypeNames.includes(option.name)}
                        onChange={() => handleSelectionChange(option.id)}
                    />
                    <label htmlFor={option.id} className={styles.label}>{option.name}</label>
                </div>
            ))}
        </div>
    );
};

export default RepairTypeSelector;