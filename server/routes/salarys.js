const router = require('express').Router();
let Salary = require('../model/salary.model');

router.route('/').get((req, res) => {
  Salary.find()
    .then(salarys => res.json(salarys))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const companyname = req.body.companyname;
  const base = req.body.base;
  const stock = req.body.stock;
  const bonus = Number(req.body.bonus);
  const date = Date.parse(req.body.date);

  const newSalary = new Salary({
    companyname,
    base,
    stock,
    bonus,
    date,
  });

  newSalary.save()
  .then(() => res.json('Salary added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Salary.findById(req.params.id)
    .then(salary => res.json(salary))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Salary.findByIdAndDelete(req.params.id)
    .then(() => res.json('Salary deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Salary.findById(req.params.id)
    .then(salary => {
      salary.companyname = req.body.companyname;
      salary.base = req.body.base;
      salary.stock = req.body.stock;
      salary.bonus = Number(req.body.bonus);
      salary.date = Date.parse(req.body.date);

      salary.save()
        .then(() => res.json('Salary updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;