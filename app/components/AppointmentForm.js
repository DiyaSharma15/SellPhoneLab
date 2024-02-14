import React, { useState } from 'react';
const formContainerStyle = {
    border: '1px solid #F27024',
    boxShadow: '0 4px 8px rgba(242, 112, 36, 1)',
    padding: '20px',
    margin: '10px 0 10px 10px', // Adjusted margin for spacing from the sections
    borderRadius: '8px',
    width: '250px', // Set width as per requirement
    height: 'auto', // Adjust height based on content, or set a fixed height if preferred
    boxSizing: 'border-box',
    color: 'black',
    backgroundColor: 'white', // Assuming a white background, adjust as needed
  };
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here, you would typically send the formData to your backend or API endpoint.
  };

  return (
    <form style={formContainerStyle} onSubmit={handleSubmit}>
      <h2 style={{ color: '#0046BE', fontWeight: 'bold' }}>Request Appointment</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Full Name</label><br />
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Email</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Phone</label><br />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Message</label><br />
        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
      </div>
      <button type="submit" style={{ background: '#0046BE', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
    </form>
  );
};

export default AppointmentForm;
