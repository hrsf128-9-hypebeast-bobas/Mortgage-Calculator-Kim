import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../styles/FinancialDetails.css';

const InterestRate = (props) => {
  const {
    interestRateFormat, setInterestRate, interestRate,
  } = props;

  return (
    <div className={styles.gridCellBox && styles.gridFlex}>
      <div className={styles.inputContainer}>
        <div className={styles.financialDetail}>
          <div className={styles.textContainer}>
            {/* <label forhtml="InterestRateInput">Interest Rate</label> */}
            Interest Rate
          </div>
          <input id="InterestRateInput" className={styles.interestRateInput} style={{ width: '75px' }} type="text" onChange={(e) => setInterestRate(e.target.value)} value={interestRateFormat} />
        </div>
        <div className="slider-container">
          <input className="range" type="range" min="0.0" max="6.50" step="0.10" onChange={(e) => setInterestRate(e.target.value)} value={interestRate} />
        </div>
      </div>
    </div>
  );
};

// InterestRate.propTypes = {
//   interestRate: PropTypes.number.isRequired,
//   interestRateFormat: PropTypes.string.isRequired,
//   setInterestRate: PropTypes.func.isRequired,
// };

export default InterestRate;
