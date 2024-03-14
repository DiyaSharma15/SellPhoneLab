"use client";

// InventoryManagement.js
import React, { useEffect, useState } from "react";
import { db } from "/firebase-config"; // Make sure this path correctly points to your Firebase config
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, onSnapshot } from "firebase/firestore";
import styles from '../_components/InventoryManagement.module.css'; // Adjust with your actual CSS module path
import Header from "../../components/Header"; // Adjust the import path as needed
import Footer from "../../components/Footer"; // Adjust the import path as needed

const InventoryManagement = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [newModel, setNewModel] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "inventory"), (snapshot) => {
      const loadedItems = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInventoryItems(loadedItems);
    });
  
    return () => unsubscribe(); // This will unsubscribe from the snapshot listener when the component unmounts
  }, []);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const itemData = { model: newModel, price: parseFloat(newPrice), quantity: parseInt(newQuantity, 10) };

    if (editingId) {
      const itemRef = doc(db, "inventory", editingId);
      await updateDoc(itemRef, itemData);
    } else {
      await addDoc(collection(db, "inventory"), itemData);
    }

    // Reset form and potentially refetch items
    setNewModel('');
    setNewPrice('');
    setNewQuantity('');
    setEditingId(null);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setNewModel(item.model);
    setNewPrice(item.price.toString());
    setNewQuantity(item.quantity.toString());
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "inventory", id));
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
        <ul className={styles.list}>
          {inventoryItems.map(item => (
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
      <Footer />
    </>
  );
};

export default InventoryManagement;
