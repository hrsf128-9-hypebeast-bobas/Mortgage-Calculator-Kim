const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const genListings = (start, end, filenum) => {
  const writer = csvWriter();
  writer.pipe(fs.createWriteStream(`../csv/listings${filenum}.csv`));
  for (let id = start; id < end; id++) {
    writer.write({
      listing_id: id,
      home_price: faker.random.number({min: 1000000, max: 50000000}),
      home_insurance: faker.random.number({ min: 50, max: 80 }),
      home_zip: faker.address.zipCode('#####')
    })
  }
}

genListings(1, 100, 1);