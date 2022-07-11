module.exports = (app) => {
    const expensesController = require("./controllers/expenses.controller")
    const router = require("express").Router();

    app.use("/api/expenses", router);
}