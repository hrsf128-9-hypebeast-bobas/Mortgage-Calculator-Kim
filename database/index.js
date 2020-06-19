// connect to mongoose
const mongoose = require('mongoose');

// entry point of mongo in the database
const mongoUri = 'mongodb://localhost/blogmodo';

const db = mongoose.connect(mongoUri);

module.exports = db;
