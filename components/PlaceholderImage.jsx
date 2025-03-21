import React from 'react';

const PlaceholderImage = ({ text = 'Image', width = '100%', height = '100%', bgColor = '#1a1f6c' }) => {
  return (
    <div 
      style={{ 
        width, 
        height, 
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        borderRadius: '0.5rem'
      }}
    >
      {text}
    </div>
  );
};

export default PlaceholderImage;