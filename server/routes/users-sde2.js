const router = require('express').Router();
let User = require('../model/users-sde2.model');

router.route('/').get((req, res) => {
  User.find()
    .then(userssde2 => res.json(userssde2))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const companyname = req.body.companyname;

  const newUsersde2 = new User({companyname});

  newUsersde2.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;