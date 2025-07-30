const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const data = require("./db");

// Load the schema from file
const typeDefs = gql(fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"));

const resolvers = {
  Query: {
    customers: () => data.customers,
    accounts: () => data.accounts,
    transactions: () => data.transactions,
  },
  Customer: {
    accounts: (parent) =>
      data.accounts.filter((a) => a.customerId === parent.id),
  },
  Account: {
    transactions: (parent) =>
      data.transactions.filter((t) => t.accountId === parent.id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => {
  console.log(`🚀 GraphQL server ready at ${url}`);
});
