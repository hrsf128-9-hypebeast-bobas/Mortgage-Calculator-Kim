const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 4444;
const controller = require('./controller')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.get('/api/home1', controller.getData);

app.listen(port, () => console.log(`\nlistening at http://localhost:${port}`));
