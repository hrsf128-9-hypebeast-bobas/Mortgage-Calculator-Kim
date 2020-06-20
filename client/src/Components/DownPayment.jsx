import React from 'react';
import PropTypes from 'prop-types';

const DownPayment = (props) => {
  const {
    setDownPaymentTotal, downPaymentFormat, setPaymentRate, downPaymentRateFormat, downPaymentRate,
  } = props;
  return (
    <div className="grid-cell-box grid-flex">
      <div className="input-container ">
        <div className="financial-detail ">
          <div className="text-container">
            {/* <label forhtml="DownPaymentInput">Down Payment</label> */}
            Down Payment
          </div>
          <div className="down-payment-wrapper">
            {/* left payment */}
            <input className="left-split-financial-input" id="DownPaymentInput" style={{ width: '100px' }} type="text" onChange={(e) => setDownPaymentTotal(e.target.value)} value={downPaymentFormat} />
            {/* Down Payment right Textarea */}
            <input className="right-split-financial-input" style={{ width: '56px' }} type="text" onChange={(e) => setPaymentRate(e.target.value)} value={(downPaymentRateFormat)} />
          </div>
        </div>
        <div className="slider-container">
          {/* Down Paypment Slider */}
          <input className="range" type="range" min="0" max="30" onChange={(e) => setPaymentRate(e.target.value)} value={downPaymentRate} />
        </div>
      </div>
    </div>
  );
};

DownPayment.propTypes = {
  setDownPaymentTotal: PropTypes.number.isRequired,
  downPaymentFormat: PropTypes.string.isRequired,
  setPaymentRate: PropTypes.func.isRequired,
  downPaymentRateFormat: PropTypes.string.isRequired,
  downPaymentRate: PropTypes.number.isRequired,
};

export default DownPayment;
