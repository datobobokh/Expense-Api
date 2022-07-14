module.exports = (sequelize, Sequelize) => {
  const expenses = sequelize.define("expenses",
    { 
      shop: {
        type: Sequelize.STRING
      },
      spend: {
        type: Sequelize.FLOAT
      }
    }
  )
  return expenses;
}