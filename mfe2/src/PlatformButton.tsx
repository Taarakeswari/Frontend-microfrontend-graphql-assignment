import React from 'react';

const PlatformButton = () => {
  const handleDownload = () => {
    const csv = "Transaction ID,Type,Amount,Description,Date\n1,CREDIT,1000,Salary,2025-07-01";
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'transactions.csv';
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Download CSV
    </button>
  );
};

export default PlatformButton;
