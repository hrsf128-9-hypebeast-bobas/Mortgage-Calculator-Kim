const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3333;
const Mortgage = require('../database/Mortgage.js'); // the model

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', express.static(path.join(__dirname, '../client/dist/')));
app.use(express.static('./public'));

app.get('/mortgage', (req, res) => {
  // query database
  Mortgage.find({}, (err, results) => {
    if (err) {
      res.status(400).send('Error fetching data');
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`\nlistening at http://localhost:${port}`));
