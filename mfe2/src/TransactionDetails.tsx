import React from 'react';
import { Text } from 'react-native';
import { Card, MainContent, TextWrapper } from 'ui-kit';

type Props = {
  transaction: any;
};

const TransactionDetails: React.FC<Props> = ({ transaction }) => {
  if (!transaction) {
    return <p>Select a transaction to see details.</p>;
  }

  return (
    <MainContent style={{ borderWidth: 1, borderColor: '#ccc', borderStyle: 'solid', padding: 16 }}>
      <TextWrapper style={{ fontSize: 24, marginBottom: 16 }}>
        Transaction Details
      </TextWrapper>
      <Card style={{ flex: 1 }}>
        <Text><Text style={{ fontWeight: 'bold' }}>ID:</Text> {transaction.id}</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Type:</Text> {transaction.type}</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Amount:</Text> ${transaction.amount.toFixed(2)}</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Description:</Text> {transaction.description}</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Date:</Text> {new Date(transaction.date).toLocaleString()}</Text>
      </Card>
    </MainContent>
  );
};

export default TransactionDetails;
