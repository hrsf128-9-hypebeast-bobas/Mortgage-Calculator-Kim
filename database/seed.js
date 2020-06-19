// the fake data
const db = require('./index.js');
const Mortgage = require('./Mortgage.js');

const data = [
  {
    mortgagePrice: 4798000,
  },
];

const insertSampleBlogs = () => {
  Mortgage.create(data)
    .then(() => db.disconnect());
};

insertSampleBlogs();
