import React from 'react';
import { Text } from 'react-native';

import { Table, TableHead, TableBody, TableRow, TableCell, Button } from 'ui-kit';

const styles: { [key: string]: React.CSSProperties } = {
  th: {
    border: '1px solid #ccc',
    padding: '8px',
    background: '#f5f5f5',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ccc',
    padding: '8px',
    verticalAlign: 'top',
  },
};

const AccountTable  = ({ accounts, onTransactionClick }: { accounts: any[]; onTransactionClick: (tx: any) => void }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell isHeader style={styles.th}>
          <Text>Account</Text>
        </TableCell>
        <TableCell isHeader style={styles.th}>
           <Text>Balance</Text>
        </TableCell>
        <TableCell isHeader style={styles.th}>
          <Text>Currency</Text>
        </TableCell>
        <TableCell isHeader style={styles.th}>
          <Text>Last 3 Transactions</Text>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {accounts.map((account) => (
        <TableRow key={account.id}>
          <TableCell style={styles.td}> <Text>{account.accountNumber}</Text></TableCell>
          <TableCell style={styles.td}><Text>{account.balance.toFixed(2)}</Text></TableCell>
          <TableCell style={styles.td}><Text>{account.currency}</Text></TableCell>
          <TableCell style={styles.td}>
            <ul style={{ margin: 0, paddingLeft: 16, listStyleType: 'none' }}>
              {account.transactions.slice(0, 3).map((tx: any) => (
                <li key={tx.id}>
                  <Button onClick={() => onTransactionClick(tx)}>
                    <Text>{tx.type} - ${tx.amount.toFixed(2)}</Text>
                  </Button>
                </li>
              ))}
            </ul>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default AccountTable ;
