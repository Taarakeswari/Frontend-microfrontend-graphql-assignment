import React from 'react';
import { Card, TextWrapper, MainContent } from 'ui-kit';
import AccountSummary from './AccountSummary';

export default function AccountOverviewApp() {
  return (
    <MainContent style={{ padding: 24 }}>
      <Card style={{ padding: 16, maxWidth: 600, marginBottom: 24 }}>
        <TextWrapper style={{ fontSize: 24, marginBottom: 16 }}>
          Account Overview
        </TextWrapper>
        <AccountSummary />
      </Card>
    </MainContent>
  );
}
