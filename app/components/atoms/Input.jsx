import React from 'react';

const Input = ({ 
    label, 
    type = 'text',
    name,
    value, 
    onChange,
    placeholder,
    max,
    className,
    error 
}) => {
    
  return (
    <>
      {label && <label className="block text-md font-medium mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        max={max}
        className={`
            ${className}
            border rounded-lg p-3 w-full shadow-sm
            ${error ? 'border-red' : 'border-secondary'} 
            focus:outline-none focus:ring-1 
            ${error ? 'focus:ring-red' : 'focus:ring-primary focus:border-primary'}
        `}
      />
      {error && 
        <p className="mt-1 font-light text-xs text-red">{error}</p>
      }
    </>
  );
};

export default Input;