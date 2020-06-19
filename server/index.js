const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 2222;
const Mortgage = require('../database/Mortgage.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../client/dist/')));

app.get('/mortgage', (req, res) => {
  // query database
  console.log('server hit');
  Mortgage.find((err, results) => {
    console.log('inside find');
    if (err) {
      res.status(400).send('Error fetching data');
    } else {
      console.log(results);
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
