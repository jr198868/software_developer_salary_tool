const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersde2Schema = new Schema({
  companyname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Usersde2 = mongoose.model('Userssde2', usersde2Schema);

module.exports = Usersde2;