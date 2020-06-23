/* eslint-disable no-console */
import React from 'react';
// import PropTypes from 'prop-types';

const HomePrice = (props) => {
  const {
    homePriceVal, homePriceFormat, sethomePriceVal,
  } = props;

  const changePrice = (e) => {
    const { value } = e.target;
    sethomePriceVal(value);
  };

  return (
    <div className="grid-cell-box grid-flex">
      <div className="input-container ">
        <div className="financial-detail ">
          <div className="text-container">
            Home Price
          </div>
          <input id="homePriceInput" className="home-price-input" style={{ width: '112px' }} type="text" onChange={() => console.log('hit')} value={homePriceFormat} />
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
