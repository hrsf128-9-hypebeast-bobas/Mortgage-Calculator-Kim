const db = require('../database/Mortgage.js');

const getData = (req, res) => {
  db.find({}, (err, results) => {
    if (err) {
      res.status(400).send('Error fetching data');
    } else {
      res.status(200).send(results);
    }
  });
}

module.exports = {getData}