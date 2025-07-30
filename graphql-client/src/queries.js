// queries.js
import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query {
    customers {
      id
      name
      email
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
  }
`;
