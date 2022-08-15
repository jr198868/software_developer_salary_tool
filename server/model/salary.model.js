const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({
  companyname: { type: String, required: true },
  base: { type: Number, required: true },
  stock: { type: Number, required: true },
  bonus: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;