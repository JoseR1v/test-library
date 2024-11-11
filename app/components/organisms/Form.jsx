"use client";

import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { validateFormData, getCurrentDate } from '../../utils/validations';

const Form = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );
  const [errors, setErrors] = useState({});
  const [currentDay, setCurrentDay] = useState(getCurrentDate)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-5/6 max-lg:w-full space-y-6 p-4 mx-auto">
      {fields.map((field) => (
        <div key={field.name}>
          {field.type === 'radio' ? (
            <div className="mb-4">
              <label className="block font-medium mb-1">{field.label}</label>
              <div className="flex max-lg:flex-col gap-4">
                {field.options.map((option) => (
                  <label key={option} className="flex items-center max-lg:font-light gap-2 text-base">
                    <input
                      type="radio"
                      name={field.name}
                      value={option}
                      checked={formData[field.name] === option}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors[field.name] && <p className="text-red text-sm mt-1">{errors[field.name]}</p>}
            </div>
          ) : (
            <Input
              label={field.label}
              name={field.name}
              type={field.type || 'text'}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              error={errors[field.name]}
              max={field.type === 'date' ? currentDay : undefined}
            />
          )}
        </div>
      ))}
      <div className='flex justify-end pt-4'>
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  );
};

export default Form;
