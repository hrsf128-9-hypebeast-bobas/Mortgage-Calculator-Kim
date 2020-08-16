-- psql -U postgres -d calculator
DROP DATABASE IF EXISTS calculator;
CREATE DATABASE calculator;

\connect calculator

CREATE TABLE listings (
  listing_id SERIAL PRIMARY KEY,
  home_price INTEGER NOT NULL,
  home_insurance INTEGER NOT NULL,
  home_zip VARCHAR(5) NOT NULL
);

CREATE TABLE loan (
  loan_id SERIAL PRIMARY KEY,
  loan_type VARCHAR(30) NOT NULL
);

CREATE TABLE interest_rate (
  interest_id SERIAL PRIMARY KEY,
  interest_rate FLOAT NOT NULL
);

CREATE TABLE buyers (
  buyer_id SERIAL PRIMARY KEY,
  listing_id INT NOT NULL REFERENCES listings(listing_id),
  down_payment_rate FLOAT NOT NULL,
  property_tax_rate FLOAT NOT NULL,
  loan_type_id SMALLINT NOT NULL REFERENCES loan(loan_id),
  interest_rate_id SMALLINT NOT NULL REFERENCES interest_rate(interest_id)
);

--  psql -U postgres -d admin < schema.sql
-- listing csv
COPY listings FROM '/Users/admin/Desktop/hack-reactor/fec/Mortgage-Calculator-Kim/database/csv/listings1.csv' DELIMITER',' CSV HEADER;


-- buyers csv
COPY buyers FROM '/Users/admin/Desktop/hack-reactor/fec/Mortgage-Calculator-Kim/database/csv/buyers1.csv' DELIMITER',' CSV HEADER;

-- interestRate csv
COPY interest_rate FROM '//Users/admin/Desktop/hack-reactor/fec/Mortgage-Calculator-Kim/database/csv/interestRate.csv' DELIMITER',' CSV HEADER;

-- loanType csv
COPY loan FROM '/Users/admin/Desktop/hack-reactor/fec/Mortgage-Calculator-Kim/database/csv/loanType.csv' DELIMITER',' CSV HEADER;