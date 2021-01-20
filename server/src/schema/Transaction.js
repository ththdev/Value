import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  budget: { type: mongoose.Schema.Types.ObjectId, ref: "Budget" },
});

export default mongoose.model("Transaction", TransactionSchema);
