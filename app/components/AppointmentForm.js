import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { app } from "./firebase"; // Assuming your firebase.js file is in the same directory
import { getFirestore } from "firebase/firestore"; // Import getFirestore directly

const firestore = getFirestore(app); // Get Firestore instance from your Firebase app

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const docRef = await addDoc(
        collection(firestore, "appointments"),
        formData
      );
      console.log("Document written with ID: ", docRef.id);
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const formContainerStyle = {
    border: "1px solid black",
    background: "#f9f9f9", // Very light grey background
    padding: "15px", // Adjusted padding for a smaller form
    margin: "10px",
    borderRadius: "8px",
    width: "300px",
    height: "400px", // Making the form a bit smaller
    boxSizing: "border-box",
    color: "black",
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Creates consistent spacing between form elements
  };

  const inputStyle = {
    padding: "8px",
    border: "1px solid #ccc", // Lighter border for input fields for visibility
    borderRadius: "4px",
  };

  return (
    <form onSubmit={handleSubmit} style={formContainerStyle}>
      <h2 style={{ color: "black", margin: "0 0 10px 0" }}>
        Request Appointment
      </h2>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        style={inputStyle}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        style={inputStyle}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows="3"
        style={inputStyle}
        required
      ></textarea>
      <button
        type="submit"
        style={{
          padding: "10px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
