const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");

const {DB, USER, PASSWORD, HOST, pool} = dbConfig;
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    HOST,
    dialect: "postgres",
    pool: {
      max: pool.max,
      min: pool.min,
      acquire: pool.acquire,
      idle: pool.idle 
    }
  }
 )

 const expenses = require("./expenses.model")(sequelize, Sequelize);
 
 const auth = async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
 }

auth();

module.exports = {expenses, sequelize, Sequelize}