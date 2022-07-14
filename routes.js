module.exports = (app) => {
    const expensesController = require("./controllers/expenses.controller")
    const router = require("express").Router();

    router.route("/")
    .post(expensesController.add)
    .get(expensesController.show);
    
    app.use("/api/expenses", router);
}