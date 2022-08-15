const router = require('express').Router();
let Salarysde2 = require('../model/salary-sde2.model');

router.route('/').get((req, res) => {
  Salarysde2.find()
    .then(salaryssde2 => res.json(salaryssde2))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const companyname = req.body.companyname;
  const base = req.body.base;
  const stock = req.body.stock;
  const bonus = Number(req.body.bonus);
  const date = Date.parse(req.body.date);

  const newSalarysde2 = new Salarysde2({
    companyname,
    base,
    stock,
    bonus,
    date,
  });

  newSalarysde2.save()
  .then(() => res.json('Salary added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Salarysde2.findById(req.params.id)
    .then(salaryssde2 => res.json(salaryssde2))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Salarysde2.findByIdAndDelete(req.params.id)
    .then(() => res.json('Salary deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Salarysde2.findById(req.params.id)
    .then(salaryssde2 => {
      salaryssde2.companyname = req.body.companyname;
      salaryssde2.base = req.body.base;
      salaryssde2.stock = req.body.stock;
      salaryssde2.bonus = Number(req.body.bonus);
      salaryssde2.date = Date.parse(req.body.date);

      salaryssde2.save()
        .then(() => res.json('Salary updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;