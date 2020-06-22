/* eslint-disable max-len */
import React, { useState } from 'react';
import CostDetails from './CostDetails';
import FinancialDetails from './FinancialDetails';
import DonutGraph from './DonutGraph';
import PaymentContainer from './PaymentContainer';
import PreQualified from './PreQualified';

function App() {
  const [homePriceVal, sethomePriceVal] = useState(4798000);
  const [downPaymentRate, setPaymentRate] = useState(20);
  const [setDownPaymentTotal] = useState(750);
  const [interestRate, setInterestRate] = useState(3.49);
  const [loanType, setLoanType] = useState('30-year fixed');

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
    <div className="page-layout">
      <h1>Welcome!</h1>
      <div className="affordability-container">
        <CostDetails monthlyMortgage={mortgageFormat} />
        <FinancialDetails sethomePriceVal={sethomePriceVal} homePriceVal={Number(homePriceVal)} downPaymentTotal={downPaymentTotal} setDownPaymentTotal={setDownPaymentTotal} downPaymentRate={Number(downPaymentRate)} setPaymentRate={setPaymentRate} interestRate={Number(interestRate)} setInterestRate={setInterestRate} loanType={loanType} setLoanType={setLoanType} />
      </div>
      <div className="graph-container">
        {/* ************** VISUAL GRAPH  ****************** */}
        <DonutGraph principal={principalInterestVal} propertyTaxes={propertyTaxes} homeIns={homeIns} mortgageIns={mortgageIns} monthlyMortgage={monthlyMortgage} />
        {/* ************** GRAPH INFO ****************** */}
        <div className="affordability-table">
          <PaymentContainer principal={principalInterestVal} taxes={propertyTaxes} homeIns={homeIns} mortgage={mortgageIns} />
          <div className="extra-padding"> </div>
          <PreQualified />
        </div>
      </div>
    </div>
  );
}

export default App;
