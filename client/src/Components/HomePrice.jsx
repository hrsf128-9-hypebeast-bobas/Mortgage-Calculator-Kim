/* eslint-disable no-console */
import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../styles/FinancialDetails.css';

const HomePrice = (props) => {
  const {
    homePriceVal, homePriceFormat, sethomePriceVal,
  } = props;

  const changePrice = (e) => {
    const { value } = e.target;
    sethomePriceVal(value);
  };

  return (
    <div className={styles.gridCellBox && styles.gridFlex}>
      <div className={styles.inputContainer}>
        <div className={styles.financialDetail}>
          <div className={styles.textContainer}>
            Home Price
          </div>
          <input id="homePriceInput" className={styles.homePriceInput} style={{ width: '112px' }} type="text" onChange={changePrice} value={homePriceFormat} />
        </div>
        <div className="slider-container">
          {/* Home Price Slider */}
          <input className="range" type="range" min="0" max="8000000" step="10" id="homePriceSlider" onChange={changePrice} value={homePriceVal} />
        </div>
      </div>
    </div>
  );
};

// HomePrice.propTypes = {
//   homePriceVal: PropTypes.number.isRequired,
//   homePriceFormat: PropTypes.string.isRequired,
//   sethomePriceVal: PropTypes.func.isRequired,
// };

export default HomePrice;
