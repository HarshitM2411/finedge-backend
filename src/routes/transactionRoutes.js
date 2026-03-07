const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transactionController");

router.post("/", transactionController.createTransaction);
router.get("/", transactionController.getTransactions);
router.get("/:id", transactionController.getTransactionById);
router.delete("/:id", transactionController.deleteTransaction);

router.get("/summary/:userId", transactionController.getSummary);

module.exports = router;