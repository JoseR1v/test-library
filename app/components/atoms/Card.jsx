import React from 'react';

const Card = ({ children, className, onClick }) => {
  return (
    <div 
      className={`${className} p-7 bg-white rounded-lg shadow-lg inline-block`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
