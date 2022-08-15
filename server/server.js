const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,err => {
    if(err) throw err;
    console.log('connected to MongoDB')
});

const connection = mongoose.connection;
connection.once('open', () => {
   console.log("MongoDB database connection established successfully");
 })

const salaryRouter = require('./routes/salarys');
const salarysde2Router = require('./routes/salarys-sde2');
const usersRouter = require('./routes/users');
const usersRoutersde2 = require('./routes/users-sde2');

app.use('/salarys', salaryRouter);
app.use('/salarys-sde2', salarysde2Router);
app.use('/users', usersRouter);
app.use('/users-sde2', usersRoutersde2);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

MongoClient.connect(uri, function(err, sde1) {
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