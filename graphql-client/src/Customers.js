// Customers.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from './queries';

const Customers = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading customers: {error.message}</p>;

  return (
    <div>
      <h1>Customers</h1>
      {data.customers.map(customer => (
        <div key={customer.id}>
          <h2>{customer.name} ({customer.email})</h2>
          {customer.accounts.map(account => (
            <div key={account.id} style={{ marginLeft: '1rem' }}>
              <p>Account #: {account.accountNumber}</p>
              <p>Balance: {account.balance} {account.currency}</p>
              <h4>Transactions:</h4>
              <ul>
                {account.transactions.map(txn => (
                  <li key={txn.id}>
                    {txn.type} - {txn.amount} ({txn.description})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Customers;
