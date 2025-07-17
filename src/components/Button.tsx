import React from 'react';
type ButtonProps = {
  texto: string;
  temBackground?: boolean;
};
export const Button = ({ texto, temBackground = true }: ButtonProps) => (
  <button
    style={{
      backgroundColor: temBackground ? '#7c3aed' : 'transparent',
      color: temBackground ? 'white' : '#7c3aed',
      padding: '10px 20px',
      border: temBackground ? 'none' : '1px solid #7c3aed',
      borderRadius: 6,
      fontWeight: 'bold',
      cursor: 'pointer',
      minWidth: 120,
    }}
  >
    {texto}
  </button>
);
