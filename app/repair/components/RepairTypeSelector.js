import React, { useState } from 'react';
import styles from "./RepairTypeSelector.module.css";
import globalStyles from '../../globals.css';


const RepairTypeSelector = () => {
    const [selectedTypes, setSelectedTypes] = useState([]);

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
        setSelectedTypes(prev => {
            if (prev.includes(selectedId)) {
                return prev.filter(id => id !== selectedId);
            } else {
                return [...prev, selectedId];
            }
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
                        checked={selectedTypes.includes(option.id)}
                        onChange={() => handleSelectionChange(option.id)}
                    />
                    <label htmlFor={option.id} className={styles.label}>{option.name}</label>
                </div>
            ))}
        </div>
    );
};

export default RepairTypeSelector;