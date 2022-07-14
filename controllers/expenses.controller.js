const {expenses} = require("../models");

// post

exports.add = (req, res) => {
  const errorsArr = [];
    if (!req.body["shop"]) {
      errorsArr.push("Text is required");
      res.status(422);
      res.send({answer: "Text is required"});
    }
    if (!req.body["spend"]){
      errorsArr.push("Number is required");
      res.status(422);
      res.send({answer: "Number is required"});
    }
    if (req.body["spend"] < 0){
      errorsArr.push("Number should be positive");
      res.status(422);
      res.send({answer: "Number should be positive"});
    }
    if (!req.body["date"]) {
      errorsArr.push("Date is required");
      res.status(422);
      res.send({answer: "Date is required"});
    }
    
    if (errorsArr.length) {
      res.status(422);
      res.send({answer: errorsArr});
    } 

    expenses.create(req.body)
    .then(async(data) => {
      res.send(await expenses.findAll());
    }).catch(err => {
      res.status(422).send({answer: err});
    })
  }