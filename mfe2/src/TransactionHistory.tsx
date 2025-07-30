import React from 'react';
import { Text } from 'react-native';
import { Card, MainContent, TextWrapper } from 'ui-kit';

type Props = {
  transactionHistory: any[];
};

const TransactionHistory: React.FC<Props> = ({ transactionHistory }) => {
  if (!transactionHistory || transactionHistory.length === 0) {
    return <p>Select a transactionHistory to see details.</p>;
  }
  return (
    <MainContent style={{ borderWidth: 1, borderColor: '#ccc', borderStyle: 'solid', padding: 16 }}>
      <TextWrapper style={{ fontSize: 24, marginBottom: 16 }}>
        Transaction History
      </TextWrapper>
      <Card style={{ flex: 1 }}>
        {transactionHistory.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '10px',
              borderBottom: '1px solid #ccc',
              cursor: 'pointer',

            }}
          >
            <Text><Text style={{ fontWeight: 'bold' }}>Status:</Text> {item.status}</Text><br />
            <Text><Text style={{ fontWeight: 'bold' }}>Time Stamp:</Text> {new Date(item.timestamp).toLocaleString()}</Text>
          </div>
        ))}
      </Card>
    </MainContent>
  );
};

export default TransactionHistory;
