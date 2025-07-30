import React from 'react';

const Table = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', ...style }}>{children}</table>
);

// TableHead.tsx
const TableHead = ({ children }: { children: React.ReactNode }) => <thead>{children}</thead>;

// TableBody.tsx
const TableBody = ({ children }: { children: React.ReactNode }) => <tbody>{children}</tbody>;

// TableRow.tsx
const TableRow = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <tr style={style}>{children}</tr>
);

// TableCell.tsx
const TableCell = ({
  children,
  isHeader,
  style,
}: {
  children: React.ReactNode;
  isHeader?: boolean;
  style?: React.CSSProperties;
}) => {
  const Component = isHeader ? 'th' : 'td';
  return <Component style={style}>{children}</Component>;
};

export { Table, TableHead, TableBody, TableRow, TableCell };