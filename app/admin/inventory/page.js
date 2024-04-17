"use client";
import React, { useEffect, useState } from "react";
import { db } from "/firebase-config";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import styles from '../components/InventoryManagement.module.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const InventoryManagement = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [groupedItems, setGroupedItems] = useState({});
  const [newModel, setNewModel] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({});  // State to keep track of open dropdowns

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "inventory"), (snapshot) => {
      const loadedItems = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      groupItems(loadedItems);
    });
  
    return () => unsubscribe();
  }, []);

  const groupItems = (items) => {
    const brands = { 'Apple': [], 'Samsung': [], 'Google': [], 'Huawei': [], 'LG': [], 'Other': [] };
    items.forEach(item => {
      if (item.model.includes("iPhone")) brands['Apple'].push(item);
      else if (item.model.includes("Samsung")) brands['Samsung'].push(item);
      else if (item.model.includes("Google")) brands['Google'].push(item);
      else if (item.model.includes("Huawei")) brands['Huawei'].push(item);
      else if (item.model.includes("LG")) brands['LG'].push(item);
      else brands['Other'].push(item);
    });
    setGroupedItems(brands);
  };

  const toggleDropdown = (brand) => {
    setDropdownOpen(prev => ({ ...prev, [brand]: !prev[brand] }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent the default form submit action

    const itemData = {
        model: newModel,
        price: parseFloat(newPrice),  // Parse the price as a float
        quantity: parseInt(newQuantity, 10)  // Parse the quantity as an integer
    };

    if (editingId) {
        // If there's an editing ID, update the existing document
        const itemRef = doc(db, "inventory", editingId);
        await updateDoc(itemRef, itemData);
    } else {
        // If there's no editing ID, add a new document
        await addDoc(collection(db, "inventory"), itemData);
    }

    // Reset the form fields
    setNewModel('');
    setNewPrice('');
    setNewQuantity('');
    setEditingId(null);  // Clear the editing ID
};
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Inventory Management</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Model:</label>
            <input type="text" value={newModel} onChange={e => setNewModel(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label>Price:</label>
            <input type="number" value={newPrice} onChange={e => setNewPrice(e.target.value)} />
          </div>
          <div className={styles.inputGroup}>
            <label>Quantity:</label>
            <input type="number" value={newQuantity} onChange={e => setNewQuantity(e.target.value)} />
          </div>
          <button type="submit" className={styles.button}>{editingId ? 'Update' : 'Add'}</button>
        </form>
        {Object.keys(groupedItems).map(brand => (
          <div key={brand}>
            <button className={styles.dropdown} onClick={() => toggleDropdown(brand)}>{brand}</button>
            <ul className={`${styles.list} ${dropdownOpen[brand] ? '' : 'hidden'}`} id={`dropdown-${brand}`}>
              {groupedItems[brand].map(item => (
                <li key={item.id} className={styles.item}>
                  Model: {item.model}, Price: ${item.price}, Quantity: {item.quantity}
                  <div className={styles.actions}>
                    <button onClick={() => handleEdit(item)} className={styles.edit}>Edit</button>
                    <button onClick={() => handleDelete(item.id)} className={styles.delete}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default InventoryManagement;
