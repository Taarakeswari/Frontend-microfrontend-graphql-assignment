import { gql } from '@apollo/client';

export const GET_TRANSACTIONS_HISTORY = gql`
  query GetTransactions {
    transactions {
      id
      type
      amount
      description
      date,
      transactionHistory {
        status
        timestamp
      }
    }
  }
`;
