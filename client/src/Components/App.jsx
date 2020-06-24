/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import styles from '../styles/App.css';

import CostDetails from './CostDetails';
import FinancialDetails from './FinancialDetails';
import DonutGraph from './DonutGraph';
import PaymentContainer from './PaymentContainer';
import PreQualified from './PreQualified';

function App() {
  const [downPaymentRate, setPaymentRate] = useState(20);
  const [setDownPaymentTotal] = useState(750);
  const [interestRate, setInterestRate] = useState(3.49);
  const [loanType, setLoanType] = useState('30-year fixed');

  const [homePriceVal, sethomePriceVal] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3333/mortgage')
      .then((results) => results.json())
      .then((data) => {
        // console.log('GET success');
        // console.log('data', data);
        sethomePriceVal(data[0].mortgagePrice);
      });
  }, []);

  // const [homePriceVal, sethomePriceVal] = useState(4198234);

  let mortgageIns = 0;

  /* *** DOWN PAYMENT TOTAL FORMULA *** */
  const downPaymentTotal = Math.round((homePriceVal * downPaymentRate) / 100);

  /* *** COMPOUND INTEREST FORMULA *** */
  const months = 15;
  const N = months * 12;
  const P = homePriceVal - downPaymentTotal;
  const r = Number(((interestRate / 100).toFixed(5) / 12).toFixed(5));
  const top = ((1 + r) ** N).toFixed(3);
  const principalInterestVal = Math.ceil(P * ((r * top) / ((top) - 1)));

  /* *** PROPERTY TAX FORMULA *** */
  const propertyTaxes = Math.ceil((homePriceVal * 0.01) / 12);

  /* *** HOME INSURANCE *** */
  const homeIns = 75;

  /* *** MORTAGE INS. FORMULA *** */
  if ((downPaymentTotal) === 0) {
    mortgageIns = 0;
  } else if ((downPaymentRate / 100) < 0.20) {
    mortgageIns = Math.ceil(100 / (downPaymentRate / 100));
  } else {
    mortgageIns = 0;
  }

  /* *** MONTHLY MORTGAGE PAYMENTS *** */
  const nf = new Intl.NumberFormat(); // adds commas
  const monthlyMortgage = principalInterestVal + propertyTaxes + homeIns + mortgageIns;
  const mortgageFormat = nf.format(principalInterestVal + propertyTaxes + homeIns + mortgageIns);

  return (
    <div className={styles.pageLayout}>

      <div className={styles.affordabilityContainer}>
        <CostDetails monthlyMortgage={mortgageFormat} />

        <FinancialDetails sethomePriceVal={sethomePriceVal} homePriceVal={Number(homePriceVal)} downPaymentTotal={downPaymentTotal} setDownPaymentTotal={setDownPaymentTotal} downPaymentRate={Number(downPaymentRate)} setPaymentRate={setPaymentRate} interestRate={Number(interestRate)} setInterestRate={setInterestRate} loanType={loanType} setLoanType={setLoanType} />

      </div>

      <div className={styles.graphContainer}>
        <DonutGraph principal={principalInterestVal} propertyTaxes={propertyTaxes} homeIns={homeIns} mortgageIns={mortgageIns} monthlyMortgage={monthlyMortgage} />

        <div className={styles.affordabilityTable}>
          <PaymentContainer principal={principalInterestVal} taxes={propertyTaxes} homeIns={homeIns} mortgage={mortgageIns} />

          <div className={styles.extraPadding}> </div>

          <PreQualified />
        </div>

      </div>
    </div>
  );
}

export default App;
