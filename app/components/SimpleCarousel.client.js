"use client";
import React, { useState, useEffect } from 'react';

const SimpleCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 10000); // Change picture every 10 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div style={{ position: 'relative', height: '700px', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <div key={index} style={{ display: currentIndex === index ? 'block' : 'none', height: '100%' }}>
          <img src={image.url} alt={`carousel-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            zIndex: 2, // Ensure text is above the image
          }}>
            <h2 style={{ fontSize: '4em', fontWeight: 'bold', marginBottom: '10px' }}>{image.title}</h2>
            <p style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>{image.subtitle}</p>
            <a href={image.link} style={{ 
              display: 'inline-block', 
              marginTop: '60px', // Increased space between subtitle and button
              padding: '10px 20px', 
              backgroundColor: '#0046BE', 
              border: 'solid 1px white',
              color: '#ffffff', 
              textDecoration: 'none', 
              borderRadius: '5px' 
            }}>Learn More</a>
          </div>
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
        {images.map((_, index) => (
          <span 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#007bff' : '#bbb',
              margin: '0 5px',
              display: 'inline-block',
              cursor: 'pointer',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;

