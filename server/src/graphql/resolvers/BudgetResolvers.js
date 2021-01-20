import Budget from "../../schema/Budget";

export default {
  getBudget: (_, { _id }) => Budget.findById({ _id }),
  getBudgets: () => Budget.find(),
  getBudgetByTransaction: (transaction, args) =>
    Budget.findById(transaction.budget),
  createBudget: (_, { name }) => Budget.create({ name }),
};
