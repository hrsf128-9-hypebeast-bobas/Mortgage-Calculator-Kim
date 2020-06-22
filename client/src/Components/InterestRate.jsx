import React from 'react';
import PropTypes from 'prop-types';

const InterestRate = (props) => {
  const {
    interestRateFormat, setInterestRate, interestRate,
  } = props;

  return (
    <div className="grid-cell-box grid-flex">
      <div className="input-container ">
        <div className="financial-detail ">
          <div className="text-container">
            {/* <label forhtml="InterestRateInput">Interest Rate</label> */}
            Interest Rate
          </div>
          <input id="InterestRateInput" className="interest-rate-input" style={{ width: '75px' }} type="text" onChange={(e) => setInterestRate(e.target.value)} value={interestRateFormat} />
        </div>
        <div className="slider-container">
          <input className="range" type="range" min="0.0" max="6.50" step="0.10" onChange={(e) => setInterestRate(e.target.value)} value={interestRate} />
        </div>
      </div>
    </div>
  );
};

InterestRate.propTypes = {
  interestRate: PropTypes.number.isRequired,
  interestRateFormat: PropTypes.string.isRequired,
  setInterestRate: PropTypes.func.isRequired,
};

export default InterestRate;
