import React from 'react';

export const FormInput = ({ label, name, value, onChange, inputRef, ...props }) => (
  <div className="field">
    <label htmlFor={name}>{label}</label>
    <input
      ref={inputRef}
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);
