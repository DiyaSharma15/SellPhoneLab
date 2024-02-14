import React from 'react';

const HomePageSections = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '0 auto',
    maxWidth: '500px',
  };

  const sectionStyle = { 
    border: '1px solid #F27024',
    boxShadow: '0 4px 8px rgba(242, 112, 36, 1)',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    width: 'calc(50% - 20px)',
    boxSizing: 'border-box',
    color: 'black', 
  };

  const titleStyle = {
    color: '#0046BE', 
    fontWeight: 'bold',
  };

  const sections = [
    {
      title: 'Price Match Guarantee',
      content: 'We guarantee to match the price of any local competitor for the same repair, giving you confidence that you\'re receiving the best possible price. Plus, we\'ll complete the repair faster than anyone else.',
    },
    {
      title: 'Transparent Repairs',
      content: 'Our repair process is transparent, meaning you\'ll know exactly what we\'ll fix on your device and the associated cost before we commence any work.',
    },
    {
      title: 'Same Day Repairs',
      content: 'We understand your time is valuable, so we strive to return your device to you as soon as possible. In most cases, we can complete repairs in less than two hours.',
    },
    {
      title: 'Lifetime Warranty',
      content: 'Our repairs come with a lifetime warranty that is valid at all of our locations worldwide, providing you with peace of mind that your device is protected for life.',
    },
  ];

  return (
    <div style={containerStyle}>
      {sections.map((section, index) => (
        <div key={index} style={sectionStyle}>
          <h2 style={titleStyle}>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePageSections;
