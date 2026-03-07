const fs = require("fs").promises;
const path = require("path");

const file = path.join(__dirname, "../data/transactions.json");

exports.getTransactions = async () => {
  const data = await fs.readFile(file);
  return JSON.parse(data);
};

exports.saveTransactions = async (transactions) => {
  await fs.writeFile(file, JSON.stringify(transactions, null, 2));
};