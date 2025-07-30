1. Mock GraphQL Server

This folder contains a mock GraphQL backend using Apollo Server. It serves sample data for customers, accounts, and transactions, including transaction history.

---

## Features

- Custom GraphQL schema (`schema.graphql`)
- Mock data for customers, accounts, and transactions (`db.js`)
- Apollo Server setup (`index.js`)
- Ready for frontend consumption

---

## Setup

1. **Install dependencies:**
   ```sh
   npm install apollo-server graphql
   ```

2. **Start the server:**
   ```sh
   node index.js
   ```
   The server will run at [http://localhost:4000/graphql](http://localhost:4000/graphql).

---

## Files

- `db.js`  
  Contains mock data for:
  - Customers (id, name, email)
  - Accounts (id, customerId, accountNumber, balance, currency)
  - Transactions (id, accountId, type, amount, description, date, transactionHistory)

- `schema.graphql`  
  Defines the GraphQL types and queries:
  - `Customer`, `Account`, `Transaction`, `TransactionHistory`
  - Nested relationships (accounts in customers, transactions in accounts)

- `index.js`  
  Loads the schema and data, sets up Apollo Server, and starts the backend.

---

## Example Query

```graphql
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
```

---

## Notes

- Make sure this server is running before starting any frontend client.
- You can modify `db.js` to add more mock data as needed.
- The schema supports nested queries for accounts and transactions.

---
2. GraphQL Client

This folder contains a React frontend that connects to the mock GraphQL backend and displays customer, account, and transaction data.

---

## Features

- Uses Apollo Client for GraphQL queries
- Displays customers, accounts, and transactions
- Shows transaction history
- Responsive UI for web

---

## Setup

1. **Install dependencies:**
   ```sh
   npm install @apollo/client graphql react react-dom
   ```

2. **Start the client:**
   ```sh
   npm start
   ```
   The app runs at [http://localhost:3000](http://localhost:3000).

---

## Files

- `src/queries.js`  
  Contains GraphQL queries for fetching customers, accounts, and transactions.

- `src/App.js`  
  Main React component that sets up Apollo Client and renders data.

- Other components  
  For displaying tables, summaries, and transaction details.

---

## Example Query

```graphql
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
```

---

## Notes

- Ensure the mock GraphQL server is running at `http://localhost:4000/graphql` before starting the client.
- You can customize queries in `src/queries.js` as needed.
- The UI is responsive and works in mobile view via browser tools.

---

3. Host Web

This folder contains the main web host application for your micro frontend architecture. It loads and integrates micro frontends (such as mfe1 and mfe2) and connects to the mock GraphQL backend.

---

## Features

- Hosts multiple micro frontends (MFEs)
- Integrates MFEs via module federation, iframe, or WebView
- Provides shared state or event bus for communication between MFEs
- Connects to the GraphQL backend for data
- Responsive UI for desktop and mobile browsers

---

## Installation & Setup

1. **Navigate to the folder:**
   ```sh
   cd host-web
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the host web application:**
   ```sh
   npm start
   ```
   The app runs at [http://localhost:3000](http://localhost:3000).

---

## File Structure

```
host-web/
│
├── src/
│   ├── App.js                # Main application component, loads MFEs
│   ├── MicroFrontendLoader.js# Utility/component to load micro frontends
│   ├── EventBus.js           # Event bus for communication between MFEs
│   ├── index.js              # Entry point for React app
│   └── ...                   # Other shared components, styles, etc.
│
├── public/
│   ├── index.html            # HTML template
│   └── ...                   # Static assets
│
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

---

## Detailed File Explanations

- **src/App.js**  
  The main React component. Responsible for rendering the host layout and loading micro frontends (MFEs) using `MicroFrontendLoader`. Handles shared state and event bus setup.

- **src/MicroFrontendLoader.js**  
  A utility or React component that loads MFEs either via module federation, iframe, or dynamic import. Accepts props for remote URL, module name, and handles mounting/unmounting.

- **src/EventBus.js**  
  Implements a simple event bus (pub/sub) for communication between MFEs. Used to emit and listen for events like transaction selection.

- **src/index.js**  
  The entry point for the React application. Renders `App.js` into the DOM.

- **public/index.html**  
  The HTML template for the web app.

- **package.json**  
  Contains all dependencies, scripts (`start`, `build`, etc.), and configuration for the host web app.

---

## Usage

- Ensure the mock GraphQL server is running at `http://localhost:4000/graphql`.
- Ensure all micro frontends (e.g., mfe1, mfe2) are running and exposed as remote modules or accessible URLs.
- Start the host web app and access it in your browser at [http://localhost:3001](http://localhost:3001).
- The host will load and display the micro frontends, allowing them to communicate and share data.

---

## Notes

- You can configure which MFEs to load and how they communicate in the host's source code.
- The host can be extended to support more MFEs or advanced routing.
- For local development, ensure all services are running and accessible.
- The UI is responsive and works in mobile view via browser tools.

---

4. Micro Frontend 1 (mfe1)

This folder contains Micro Frontend 1, which displays an account summary table and emits events for transaction selection. It is designed to be loaded by the host web app or run standalone in web/mobile (React Native).

---

## Features

- Fetches account data from the GraphQL backend
- Displays account summary in a responsive table
- Shows last transactions for each account
- Emits events (e.g., transaction selection) for other MFEs to consume
- Can run in web or mobile (React Native) environments

---

## Installation & Setup

1. **Navigate to the folder:**
   ```sh
   cd mfe1
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start for Web:**
   ```sh
   npm start
   ```
   The app runs at [http://localhost:3001](http://localhost:3001) (or your configured port).
---

## File Structure

```
mfe1/
│
├── src/
│   ├── AccountSummary.tsx      # Main component: displays account summary table
│   ├── AccountTable.tsx        # Table component for accounts and transactions
│   ├── EventBus.ts             # Event bus for communication with other MFEs
│   ├── queries.ts              # GraphQL queries for fetching account data
│   ├── MicroApp.tsx            # Entry point for micro frontend logic
│   ├── index.tsx               # Entry point for web
│   └── ...                     # Other shared components, styles, etc.
│
├── App.tsx                     # Entry point for React Native (mobile)
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

---

## Detailed File Explanations

- **src/AccountSummary.tsx**  
  Main component that fetches account data via GraphQL and displays it in a table. Handles transaction click events and emits them via the event bus.

- **src/AccountTable.tsx**  
  Renders the account summary as a table, including account details and recent transactions.

- **src/EventBus.ts**  
  Implements a simple event bus (pub/sub) for communication with other micro frontends (e.g., transaction selection).

- **src/queries.ts**  
  Contains GraphQL queries for fetching accounts and transactions.

- **src/MicroApp.tsx**  
  Entry point for the micro frontend logic. Can be loaded by the host web app.

- **src/index.tsx**  
  Entry point for running the micro frontend in a web environment.

- **App.tsx**  
  Entry point for running the micro frontend in a React Native (mobile) environment.

- **package.json**  
  Contains all dependencies, scripts (`start`, `build`, etc.), and configuration for mfe1.

- **tsconfig.json**  
  TypeScript configuration for the project.

---

## Usage

- Ensure the mock GraphQL server is running at `http://localhost:4000/graphql`.
- Start mfe1 in web or mobile mode as described above.
- When loaded by the host web app, mfe1 will display the account summary and emit transaction selection events for other MFEs to consume.

---

## Notes

- You can customize the table and event logic in `AccountSummary.tsx` and `AccountTable.tsx`.
- The micro frontend is designed to be responsive and mobile-friendly.
- For local development, ensure all services (GraphQL backend, host web, other MFEs) are running and accessible.

---

5.Micro Frontend 2 (mfe2)

This folder contains Micro Frontend 2, which displays transaction details and listens for events (such as transaction selection) from other micro frontends. It is designed to be loaded by the host web app or run standalone in web/mobile (React Native).

---

## Features

- Fetches transaction data from the GraphQL backend
- Displays detailed transaction history
- Listens for events (e.g., transaction selection) from other MFEs via an event bus
- Can run in web or mobile (React Native) environments

---

## Installation & Setup

1. **Navigate to the folder:**
   ```sh
   cd mfe2
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start for Web:**
   ```sh
   npm start
   ```
   The app runs at [http://localhost:3002](http://localhost:3002) (or your configured port).

---

## File Structure

```
mfe2/
│
├── src/
│   ├── TransactionDetails.tsx   # Main component: displays transaction details and history
│   ├── EventBus.ts              # Event bus for communication with other MFEs
│   ├── GET_TRANSACTIONS_HISTORY.ts # GraphQL query for fetching transaction history
│   ├── MicroApp.tsx             # Entry point for micro frontend logic
│   ├── index.tsx                # Entry point for web
│   └── ...                      # Other shared components, styles, etc.
│
├── App.tsx                      # Entry point for React Native (mobile)
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

---

## Detailed File Explanations

- **src/TransactionDetails.tsx**  
  Main component that fetches transaction data via GraphQL and displays detailed transaction history. Listens for transaction selection events via the event bus.

- **src/EventBus.ts**  
  Implements a simple event bus (pub/sub) for communication with other micro frontends (e.g., receiving transaction selection events).

- **src/GET_TRANSACTIONS_HISTORY.ts**  
  Contains the GraphQL query for fetching transaction history.

- **src/MicroApp.tsx**  
  Entry point for the micro frontend logic. Can be loaded by the host web app.

- **src/index.tsx**  
  Entry point for running the micro frontend in a web environment.

- **App.tsx**  
  Entry point for running the micro frontend in a React Native (mobile) environment.

- **package.json**  
  Contains all dependencies, scripts (`start`, `build`, etc.), and configuration for mfe2.

- **tsconfig.json**  
  TypeScript configuration for the project.

---

## Usage

- Ensure the mock GraphQL server is running at `http://localhost:4000/graphql`.
- Start mfe2 in web or mobile mode as described above.
- When loaded by the host web app, mfe2 will display transaction details and listen for transaction selection events from other MFEs.

---

## Notes

- You can customize the transaction details and event logic in `TransactionDetails.tsx`.
- The micro frontend is designed to be responsive and mobile-friendly.
- For local development, ensure all services (GraphQL backend, host web, other MFEs) are running and accessible.

---

6.# UI Kit

This folder contains a reusable component library (UI Kit) for your micro frontend architecture. It provides shared UI components such as buttons, tables, modals, and form elements that can be used across host-web, mfe1, mfe2, and other projects.

---

## Features

- Reusable React components (Button, Table, Modal, Input, etc.)
- Consistent styling and theming
- TypeScript support for type-safe components
- Easily extendable for new UI elements
- Can be published as an npm package or used via local import

---

## Installation & Setup

1. **Navigate to the folder:**
   ```sh
   cd ui-kit
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Build the UI Kit (optional, for production or npm publish):**
   ```sh
   npm run build
   ```
   This will output the compiled components to the `dist/` folder.

4. **Usage in other projects:**
   - **Local import:**  
     Import components directly from the `ui-kit/src` folder in your micro frontends or host-web.
     ```js
     import { Button, Table } from '../ui-kit/src';
     ```
   - **As a package:**  
     If you publish the UI Kit to npm, install it in your project and import:
     ```js
     import { Button, Table } from 'ui-kit';
     ```

---

## File Structure

```
ui-kit/
│
├── src/
│   ├── Button.tsx           # Reusable button component
│   ├── Table.tsx            # Table component for displaying data
│   ├── Modal.tsx            # Modal dialog component
│   ├── Input.tsx            # Input field component
│   ├── ThemeProvider.tsx    # Theme and styling context
│   ├── index.ts             # Exports all components
│   └── ...                  # Other shared components, styles, etc.
│
├── styles/
│   ├── theme.ts             # Theme variables and colors
│   └── ...                  # CSS/SCSS files
│
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── README.md                # This file
└── dist/                    # Compiled output (after build)
```

---

## Detailed File Explanations

- **src/Button.tsx**  
  A customizable button component supporting different variants (primary, secondary, etc.), sizes, and disabled state.

- **src/Table.tsx**  
  A table component for displaying tabular data, with support for headers, rows, and custom cell rendering.

- **src/Modal.tsx**  
  A modal dialog component for popups, confirmations, and forms.

- **src/Input.tsx**  
  A reusable input field component for forms, supporting validation and different input types.

- **src/ThemeProvider.tsx**  
  Provides theming and styling context to all UI Kit components.

- **src/index.ts**  
  Exports all UI Kit components for easy import.

- **styles/theme.ts**  
  Defines theme variables, colors, and typography for consistent styling.

- **package.json**  
  Contains all dependencies, scripts (`start`, `build`, etc.), and configuration for the UI Kit.

- **tsconfig.json**  
  TypeScript configuration for the project.

---

## Usage

- Import and use UI Kit components in your micro frontends or host-web for a consistent look and feel.
- Extend or customize components as needed for your project.
- Share the UI Kit across teams to speed up development and maintain design consistency.

---

## Notes

- The UI Kit is designed to be framework-agnostic but currently supports React and TypeScript.
- You can add more components (e.g., Select, Checkbox, Card) as your project grows.
- For local development, link the UI Kit using npm/yarn workspaces or relative imports.

---

## Linking

- npm install ../ui-kit

---