module.exports = {
  customers: [
    { id: "1", name: "Alice Smith", email: "alice@example.com" },
    { id: "2", name: "Bob Johnson", email: "bob@example.com" }
  ],
  accounts: [
    { id: "1", customerId: "1", accountNumber: "123456", balance: 5000.5, currency: "USD" },
    { id: "2", customerId: "2", accountNumber: "654321", balance: 3200.75, currency: "EUR" }
  ],
  transactions: [
    {
      id: "1",
      accountId: "1",
      type: "DEBIT",
      amount: 250.0,
      description: "Grocery shopping",
      date: "2025-07-01T00:00:00.000Z",
      transactionHistory: [
        { status: "initiated", timestamp: "2025-07-01T09:00:00.000Z" },
        { status: "completed", timestamp: "2025-07-01T09:05:00.000Z" }
      ]
    },
    {
      id: "3",
      accountId: "1",
      type: "DEBIT",
      amount: 100.0,
      description: "Electricity bill",
      date: "2025-07-05T00:00:00.000Z",
      transactionHistory: [
        { status: "initiated", timestamp: "2025-07-05T10:00:00.000Z" },
        { status: "completed", timestamp: "2025-07-05T10:10:00.000Z" }
      ]
    },
    {
      id: "5",
      accountId: "2",
      type: "DEBIT",
      amount: 200.0,
      description: "Restaurant",
      date: "2025-07-12T00:00:00.000Z",
      transactionHistory: [
        { status: "initiated", timestamp: "2025-07-12T19:00:00.000Z" },
        { status: "completed", timestamp: "2025-07-12T19:15:00.000Z" }
      ]
    },
    {
      id: "6",
      accountId: "2",
      type: "DEBIT",
      amount: 50.75,
      description: "Taxi fare",
      date: "2025-07-15T00:00:00.000Z",
      transactionHistory: [
        { status: "initiated", timestamp: "2025-07-15T22:00:00.000Z" },
        { status: "completed", timestamp: "2025-07-15T22:05:00.000Z" }
      ]
    },
    {
      id: "4",
      accountId: "1",
      type: "CREDIT",
      amount: 1500.0,
      description: "Freelance payment",
      date: "2025-07-07T00:00:00.000Z",
      transactionHistory: [
        { status: "initiated", timestamp: "2025-07-07T08:00:00.000Z" },
        { status: "completed", timestamp: "2025-07-07T08:30:00.000Z" }
      ]
    },
    {
      id: "2",
      accountId: "2",
      type: "CREDIT",
      amount: 1000.0,
      description: "Salary",
      date: "2025-07-10T00:00:00.000Z",
      transactionHistory: [
        { status: "initiated", timestamp: "2025-07-10T07:00:00.000Z" },
        { status: "completed", timestamp: "2025-07-10T07:10:00.000Z" }
      ]
    }
  ]
};