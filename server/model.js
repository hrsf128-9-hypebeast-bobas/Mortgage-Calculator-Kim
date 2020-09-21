const db = require('../database/Mortgage.js');

const getData = (req, res) => {
  const { id } = req.params;
  const { homeZip } = req.body;
  let queryStr = `SELECT home_price FROM listings WHERE listing_id=${id}`;
  db.query(queryStr, (err, results) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(results.rows);
    }
  });
})




module.exports = {getData}