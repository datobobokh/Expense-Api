const {expenses} = require("../models");

// post

exports.add = (req, res) => {
  const {shop, spend} = req.body;
  const errorsArr = [];

    if (!shop && !spend) {
      return res.status(422).send("Shop and Spend input is not defined");
    } 

    if (isNaN(spend) || (spend < 0)){
      errorsArr.push("Input is not number or number is not positive");
    }
    if (!shop) {
      errorsArr.push("shop undefined");
    }

    if (errorsArr.length) {
      return res.status(422).send({answer: errorsArr});
    } 

    expenses.create(req.body)
    .then(async(data) => {
      return res.send(await expenses.findAll());
    }).catch(err => {
      res.status(422).send({answer: err});
    })
  }