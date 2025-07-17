// Box.tsx
import React, { ReactNode } from 'react';
type BoxProps = {
  children: ReactNode;
};
export const Box = ({ children }: BoxProps) => (
  <div style={{ border: '1px solid #e0e0e0', borderRadius: 8, padding: 24, maxWidth: 600, margin: '0 auto' }}>
    {children}
  </div>
);