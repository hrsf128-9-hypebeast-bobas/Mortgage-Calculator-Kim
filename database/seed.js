const faker = require('faker');
const Mortgage = require('./Mortgage.js');
// const fakePrice = faker.commerce.price(3000000, 4000000);
const sampleData = [];

const generateMortgage = (n) => {
  for (let i = 0; i < n; i += 1) {
    const mortgageObj = {
      mortgagePrice: faker.commerce.price(3000000, 4000000).slice(0, -3),
    };
    sampleData.push(mortgageObj);
  }
};

generateMortgage(1);
// console.log(sampleData);

const insertSampleData = () => {
  Mortgage.create(sampleData);
};

insertSampleData();

// run seeding - npm run db:setup
