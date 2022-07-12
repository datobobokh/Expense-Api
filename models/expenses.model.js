module.exports = (sequelize, Sequelize) => {
  const expenses = sequelize.define("expenses",
    { 
      shop: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE,
      },
      spend: {
        type: Sequelize.FLOAT
      }
    },
    {timestamps: false}
  )
  return expenses;
}