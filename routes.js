module.exports = (app) => {
    const expensesController = require("./controllers/expenses.controller")
    const router = require("express").Router();

    router.route("/")
    .post(expensesController.add)
    .get(expensesController.show);
    
    router.route("/:id")
    .delete(expensesController.remove);
    
    app.use("/api/expenses", router);
}