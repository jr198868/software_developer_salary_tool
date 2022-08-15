

const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const router = require('express').Router();
let Salary = require('../model/salary.model');

ATLAS_URI = 'mongodb+srv://jr198868:jr198868@cluster0.fu78m.mongodb.net/?retryWrites=true&w=majority'




router.route('/').get((req, res) => {
  Salary.find()
    .then(salarys => res.json(salarys))
    .catch(err => res.status(400).json('Error: ' + err));
});

MongoClient.connect(ATLAS_URI, function(err, sde1) {
  if (err) throw err;
  var dbo = sde1.db("test");
  var sde1salarybase = []
  var sde1salarystock = []
  var sde1salarybonus= []
  var sde1salarycompany = []

  dbo.collection("salaries").find({}).toArray(function(err, sde1salary) {
    if (err) throw err;
   
    for (let i = 0; i<sde1salary.length;i++) {
      sde1salarybase.push(sde1salary[i]['base'])
      sde1salarystock.push(sde1salary[i]['stock'])
      sde1salarybonus.push(sde1salary[i]['bonus'])
      sde1salarycompany.push(sde1salary[i]['companyname'])

    }
    console.log('Base:', sde1salarybase);
    console.log('Stock:', sde1salarystock);
    console.log('Bonus:', sde1salarybonus);
    console.log('Bonus:', sde1salarycompany)
  });

  
});
