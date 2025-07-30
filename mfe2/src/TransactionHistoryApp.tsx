import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { EventBus } from './events';
import TransactionHistory from './TransactionHistory';
import TransactionDetails from './TransactionDetails';
import PlatformButton from './PlatformButton';
import { GET_TRANSACTIONS_HISTORY } from './GET_TRANSACTIONS_HISTORY';
import { Card, MainContent } from 'ui-kit';

const App = () => {
  const { data, loading } = useQuery(GET_TRANSACTIONS_HISTORY);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    const handler = (tx: any) => {
      setSelected(tx)
    };
    console.log('EventBus: transaction:select::::::::::::::::::', handler);
    EventBus.on('transaction:select', handler);
    return () => EventBus.off('transaction:select', handler);
  }, []);

  if (loading) return null;
  return (
     <MainContent style={{ display: 'flex', flexDirection: 'column' }}>
      <Card style={{ flex: 1 }}>
        <TransactionHistory transactionHistory={selected ? selected?.transactionHistory : []} />
      </Card>
      <Card style={{ flex: 1 }}>
        <TransactionDetails transaction={selected} />
      </Card>
    </MainContent>
  );
};

export default App;
