module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "david",
  DB: "expensesDB",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}