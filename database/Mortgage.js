const mongoose = require('mongoose');

// Controller
// fixes connection and now i can querying stuff
mongoose.connect('mongodb://localhost/trulia', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection; // the connection

db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

// Schema
const mortgageSchema = new mongoose.Schema({
  mortgagePrice: Number,
});

// Model
const Mortgage = mongoose.model('Mortgage', mortgageSchema);
module.exports = Mortgage;
