import React from 'react';

const Button = ({
  children,
  onClick,
  style,
}: {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
}) => (
  <button onClick={onClick} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', margin: '4px 2px', borderRadius: '4px', ...style }}>
    {children}
  </button>
);
export default Button;
