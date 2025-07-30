// declarations.d.ts

declare module 'mfe1/AccountOverviewApp' {
  const AccountOverviewApp: React.ComponentType;
  export default AccountOverviewApp;
}

declare module './apolloClient' {
  import { ApolloClient } from '@apollo/client';
  const client: ApolloClient<any>;
  export default client;
}

declare module 'mfe2/TransactionHistoryApp' {
  const TransactionHistoryApp: React.ComponentType;
  export default TransactionHistoryApp;
}
