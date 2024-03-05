"use client";
// pages/admin/inventory.js
import React, { useEffect, useState } from "react";
import { db } from "/firebase-config"; // Make sure this path is correct
import { collection, onSnapshot } from "firebase/firestore";
import Header from "../../components/Header"; // Adjust the path as necessary
import Footer from "../../components/Footer"; // Adjust the path as necessary

const InventoryManagement = () => {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "inventory"), (snapshot) => {
      const updatedItems = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInventoryItems(updatedItems);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1>Inventory Management</h1>
        <ul>
          {inventoryItems.map(item => (
            <li key={item.id}>
              {item.itemName} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default InventoryManagement;
