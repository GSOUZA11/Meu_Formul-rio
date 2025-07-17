import React from 'react';
type InputProps = {
  label: string;
  placeholder: string;
};
export const Input = ({ label, placeholder }: InputProps) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
    />
  </div>
);