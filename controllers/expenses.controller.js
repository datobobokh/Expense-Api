const {expenses} = require("../models");

// post

exports.add = (req, res) => {
    if (!req.body["shop"]) {
      res.status(422);
      res.send({answer: "Text is required"});
    }
    if (!req.body["spend"]){
      res.status(422);
      res.send({answer: "Number is required"});
    }
    if (req.body["spend"] < 0){
      res.status(422);
      res.send({answer: "Number should be positive"});
    }
    if (!req.body["date"]) {
      res.status(422);
      res.send({answer: "Date is required"});
    }
    expenses.create(req.body)
    .then(async(data) => {
      res.send(await expenses.findAll());
    }).catch(err => {
      res.status(422).send({answer: err});
    })
  }