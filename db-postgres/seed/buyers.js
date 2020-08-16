const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const genBuyers = (start, end, filenum) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`../csv/buyers${filenum}.csv`));
  let downPaymentRates = [0.05, 0.10, 0.15, 0.20, 0.25, 0.30];
  for (let id = start; id < end; id++) {
    writer.write({
      buyer_id: id,
      listing_id: faker.random.number({min: 1, max: 100}),
      down_payment_rate: downPaymentRates[getRandomIntInclusive(0, 6)],
      property_tax_rate: 0.01,
      loan_type_id: faker.random.number({min: 1, max: 4}),
      interest_rate_id: faker.random.number({min: 1, max: 4}),
    });
  }
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1)) + min;
}

genBuyers(0, 100, 1);