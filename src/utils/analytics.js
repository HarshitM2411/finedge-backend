exports.getSummary = (transactions) => {

  let income = 0;
  let expense = 0;

  transactions.forEach(t => {

    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }

  });

  return {
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense
  };
};