import React from 'react';
type TextareaProps = {
  label: string;
  placeholder: string;
  colunas?: number;
  ehExpandivel?: boolean;
};
export const Textarea = ({ label, placeholder, colunas = 100, ehExpandivel = false }: TextareaProps) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>{label}</label>
    <textarea
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: 10,
        height: colunas,
        borderRadius: 4,
        border: '1px solid #ccc',
        resize: ehExpandivel ? 'vertical' : 'none',
        fontSize: 14,
      }}
    />
  </div>
);