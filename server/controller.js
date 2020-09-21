const Model = require('./model')

const getData = (req, res) => {
  Model.getData((err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(400).send(data);
    }
  })
};

module.exports={getData}
