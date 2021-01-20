import Transaction from "../../schema/Transaction";

export default {
  getTransaction: (_, { _id }) => Transaction.findById({ _id }),
  getTransactions: () => Transaction.find(),
  getTransactionsByBudget: (budget, args) =>
    Transaction.find({ budget: budget._id }),
  createTransaction: (_, args) => Transaction.create(args),
};
