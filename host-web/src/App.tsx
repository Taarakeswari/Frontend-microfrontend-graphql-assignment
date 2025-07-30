// host-web/src/App.tsx
import React, { Suspense } from 'react';
import { Header, MainContent, Card } from 'ui-kit';

const AccountOverview = React.lazy(() => import('mfe1/AccountOverviewApp'));
const TransactionHistory = React.lazy(() => import('mfe2/TransactionHistoryApp'));

export default function App() {
  return (
    <MainContent style={{ display: 'flex', flexDirection: 'column' }}>
      <Header  />
      <Card style={{ flex: 1 }}>
        <Suspense fallback={<div>Loading Account Overview Micro Frontend...</div>}>
          <AccountOverview />
        </Suspense>
      </Card>
      <Card style={{ flex: 1 }}>
        <Suspense fallback={<div>Loading Transaction History and Details Micro Frontend...</div>}>
          <TransactionHistory />
        </Suspense>
      </Card>
    </MainContent>
  );
}
