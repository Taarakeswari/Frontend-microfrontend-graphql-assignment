import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { EventBus } from 'mfe2/events';
import AccountTable from './AccountTable';

const ACCOUNT_QUERY = gql`
  query {
    accounts {
      id
      accountNumber
      balance
      currency
      transactions {
        id
        type
        amount
        description
        date
        transactionHistory {
          status
          timestamp
        }
      }
    }
}
`;

const AccountSummary = () => {
  const { loading, error, data } = useQuery(ACCOUNT_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('GraphQL error:', error);
    return <p>Error loading account data</p>;
  }

  const handleTransactionClick = (transaction: any) => {
    // 👇 Emits event to MF2 (which listens to this)
    EventBus.emit('transaction:select', transaction);
  };


  // Log the fetched data for inspection
  console.log('Account data:', data);

  return (
    <AccountTable accounts={data.accounts} onTransactionClick={handleTransactionClick} />
  );
};

export default AccountSummary;
