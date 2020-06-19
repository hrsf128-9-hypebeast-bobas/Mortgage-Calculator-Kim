const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// schema
const mortgageSchema = new mongoose.Schema({
  mortgagePrice: Number,
});

// mongoose automatically lower cases & adds an 's' to the end of the collection name
const Mortgage = mongoose.model('Mortgage', mortgageSchema);

// export model to be used
module.exports = Mortgage;
