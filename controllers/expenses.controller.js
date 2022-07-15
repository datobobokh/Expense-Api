const expenses = require("../models");

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
    .then((data) => {
      return this.show(req, res);
    }).catch(err => {
      res.status(422).send({answer: err});
    })
  }

exports.show = (req, res) => {
  expenses.findAll()
  .then((data) => {
    return res.send(data)
  }).catch(err => {
    return res.status(422).send({answer: err})
  })
}

exports.remove = (req, res) => {
  const {id} = req.params;
  if (!id) {
    res.status(422).send({answer: "Invalid id"})
  }
  expenses.destroy({where: {id}})
  .then((removed) =>  {
    if(removed) {
      return this.show(req, res);
    }
      return res.status(404).send({answer: "row not found"})
  }).catch(err => {
    res.status(422).send({answer: err});
  })
}

exports.edit = (req, res) => {
  const {id} = req.params;
  const {shop, spend} = req.body;
  const errorsArr = [];

  if (id) {
    if (!shop && !spend) {
      errorsArr.push("At least one input should be defined");
    }
    else {
      if (spend) {
        if ( isNaN(spend) || (spend < 0)){
          errorsArr.push("Input is not a number or number is not positive");
        }
      }
      if (!shop) {
        errorsArr.push("Shop name should be defined");
      }

    }
    if (errorsArr.length) {
      return res.status(422).send({answer: errorsArr})
    }
    
    expenses.update({ shop: shop, spend: spend}, {
    where: {id: id}})
    .then((edited) => {
      if(edited) {
        return this.show(req, res);
      }
      return res.status(404).send({answer: "Info has not Added"}) 
    }).catch(err => {
      res.status(422).send({answer: err});
    })
  }
  else {
    res.status(422).send("Id is not defined");
  }
}