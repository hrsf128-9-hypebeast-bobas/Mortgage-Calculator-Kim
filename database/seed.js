const mongoose = require('mongoose');
const faker = require('faker');
const Mortgage = require('./Mortgage.js');
// const fakePrice = faker.commerce.price(3000000, 4000000);
const homeOne = [];

const generateHome = (n) => {
  for (let i = 0; i < n; i += 1) {
    const mortgageObj = {
      mortgagePrice: faker.commerce.price(3000000, 4000000).slice(0, -3),
      downPaymentRate: 20,
      homeIns: 75,
      interestRate: 3.49,
      propertyTaxRate: 0.01,
    };
    homeOne.push(mortgageObj);
  }
};

generateHome(1);

console.log(homeOne);

const insertHomeData = () => {
  Mortgage.create(homeOne)
    .then(() => mongoose.disconnect());
};

insertHomeData();

// run seeding - npm run db:setup
