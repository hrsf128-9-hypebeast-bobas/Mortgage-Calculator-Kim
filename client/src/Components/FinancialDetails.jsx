import React from 'react';
import PropTypes from 'prop-types';
import HomePrice from './HomePrice';
import DownPayment from './DownPayment';
import InterestRate from './InterestRate';
import LoanType from './LoanType';

const FinancialDetails = (props) => {
  const {
    sethomePriceVal, homePriceVal, setDownPaymentTotal, downPaymentRate, setPaymentRate, interestRate, setInterestRate, loanType, setLoanType, downPaymentTotal,
  } = props;
  const nf = new Intl.NumberFormat(); // adds commas

  const homePriceFormat = `$${nf.format(homePriceVal)}`;
  const downPaymentFormat = `$${nf.format(downPaymentTotal)}`;
  const downPaymentRateFormat = `${downPaymentRate}%`;
  const interestRateFormat = `${interestRate}%`;

  return (
    <div className="input-container">
      <div className="flex-container-padding">
        <div className="grid-container-padding">
          <HomePrice homePriceVal={homePriceVal} homePriceFormat={homePriceFormat} sethomePriceVal={sethomePriceVal} />
          <DownPayment setDownPaymentTotal={setDownPaymentTotal} downPaymentFormat={downPaymentFormat} setPaymentRate={setPaymentRate} downPaymentRateFormat={downPaymentRateFormat} downPaymentRate={downPaymentRate} />
          <InterestRate interestRateFormat={interestRateFormat} setInterestRate={setInterestRate} interestRate={interestRate} />
          <LoanType loanType={loanType} setInterestRate={setInterestRate} setLoanType={setLoanType} />
        </div>
      </div>
    </div>
  );
};

FinancialDetails.propTypes = {
  homePriceVal: PropTypes.number.isRequired,
  downPaymentRate: PropTypes.number.isRequired,
  interestRate: PropTypes.number.isRequired,
  loanType: PropTypes.string.isRequired,
  sethomePriceVal: PropTypes.func.isRequired,
  setDownPaymentTotal: PropTypes.number.isRequired,
  setPaymentRate: PropTypes.func.isRequired,
  setInterestRate: PropTypes.func.isRequired,
  setLoanType: PropTypes.func.isRequired,
  downPaymentTotal: PropTypes.number.isRequired,
};

export default FinancialDetails;
