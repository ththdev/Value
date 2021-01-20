import mongoose from "mongoose";

const BudgetSchema = new mongoose.Schema({
  name: String,
  transactions: { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
});

export default mongoose.model("Budget", BudgetSchema);
