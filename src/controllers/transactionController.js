const transactionService = require("../services/transactionService");

exports.createTransaction = async (req, res) => {
  const transaction = await transactionService.createTransaction(req.body);
  res.json(transaction);
};

exports.getTransactions = async (req, res) => {
  const transactions = await transactionService.getTransactions();
  res.json(transactions);
};

exports.getTransactionById = async (req, res) => {
  const transaction = await transactionService.getTransactionById(req.params.id);
  res.json(transaction);
};

exports.deleteTransaction = async (req, res) => {
  const result = await transactionService.deleteTransaction(req.params.id);
  res.json(result);
};

exports.getSummary = async (req, res) => {
  const summary = await transactionService.getSummary(req.params.userId);
  res.json(summary);
};