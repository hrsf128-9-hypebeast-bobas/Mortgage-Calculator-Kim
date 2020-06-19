const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// schema
const mortgageSchema = new mongoose.Schema({
  mortagePrice: Number,
});

const Mortgage = mongoose.model('Mortgage', mortgageSchema);

module.exports = Mortgage;
