import BudgetResolovers from "./BudgetResolvers";
import TransactionResolvers from "./TransactionResolvers";

export default {
  Budget: {
    transactions: TransactionResolvers.getTransactionsByBudget,
  },
  Transaction: {
    budget: BudgetResolovers.getBudgetByTransaction,
  },
  Query: {
    getBudget: BudgetResolovers.getBudget,
    getBudgets: BudgetResolovers.getBudgets,
    getTransaction: TransactionResolvers.getTransaction,
    getTransactions: TransactionResolvers.getTransactions,
  },
  Mutation: {
    createBudget: BudgetResolovers.createBudget,
    createTransaction: TransactionResolvers.createTransaction,
  },
};
