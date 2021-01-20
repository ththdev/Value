import { gql } from "apollo-server";

export default gql`
  type Budget {
    _id: ID!
    name: String
    transactions: [Transaction]
  }

  scalar Date

  type Transaction {
    _id: ID!
    title: String
    amount: Int
    date: Date
    budget: Budget
  }

  type Query {
    getBudget(_id: ID!): Budget
    getBudgets: [Budget]
    getTransaction(_id: ID!): Transaction
    getTransactions: [Transaction]
  }

  type Mutation {
    createBudget(name: String): Budget
    createTransaction(
      budget: ID!
      title: String!
      amount: Int
      date: Date
    ): Transaction
  }
`;
