const { v4: uuidv4 } = require("uuid");
const transactionModel = require("../models/transactionModel");
const { getSummary } = require("../utils/analytics");

exports.createTransaction = async (data) => {

  const transactions = await transactionModel.getTransactions();

  const newTransaction = {
    id: uuidv4(),
    userId: data.userId,
    type: data.type,
    amount: data.amount,
    category: data.category,
    date: data.date
  };

  transactions.push(newTransaction);

  await transactionModel.saveTransactions(transactions);

  return newTransaction;
};

exports.getTransactions = async () => {
  return await transactionModel.getTransactions();
};

exports.getTransactionById = async (id) => {
  const transactions = await transactionModel.getTransactions();
  return transactions.find(t => t.id === id);
};

exports.deleteTransaction = async (id) => {

  let transactions = await transactionModel.getTransactions();

  transactions = transactions.filter(t => t.id !== id);

  await transactionModel.saveTransactions(transactions);

  return { message: "Transaction deleted" };
};

exports.getSummary = async (userId) => {

  const transactions = await transactionModel.getTransactions();

  const userTransactions = transactions.filter(t => t.userId === userId);

  return getSummary(userTransactions);
};