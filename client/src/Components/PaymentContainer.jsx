import React from 'react';
import PropTypes from 'prop-types';

const PaymentContainer = (props) => {
  const nf = new Intl.NumberFormat(); // adds commas
  const {
    principal, taxes, insurance, mortgage,
  } = props;
  return (
    <div>
      {/* **************** PRINCIPLE AND INTEREST **************** */}
      <div className="payment-container seperate-cols">
        <div className="payment-cell">
          <div className="payment-content">
            <div className="payment-cell" style={{ width: '100%' }}>
              <div className="payment-title-dot principal-dot">{/**/}</div>
              <div className="payment-content">
                Principal & Interest
              </div>
            </div>
          </div>
          <div className="price-text">
            $
            {nf.format(principal)}
          </div>
        </div>
      </div>
      {/* **************** PROPERTY TAX **************** */}
      <div className="payment-container seperate-cols">
        <div className="payment-cell">
          <div className="payment-content">
            <div className="payment-cell" style={{ width: '100%' }}>
              <div className="payment-title-dot property-tax-dot">{/* to get rid of syntax error */}</div>
              <div className="payment-content">
                Property Taxes
              </div>
            </div>
          </div>
          <div className="price-text">
            $
            {nf.format(taxes)}
          </div>
        </div>
      </div>
      {/* **************** HOME INSURANCE **************** */}
      <div className="payment-container seperate-cols">
        <div className="payment-cell">
          <div className="payment-content">
            <div className="payment-cell" style={{ width: '100%' }}>
              <div className="payment-title-dot home-insurance-dot"> </div>
              <div className="payment-content">
                Home Insurance
              </div>
            </div>
          </div>
          <div className="price-text">
            $
            {insurance}
          </div>
        </div>
      </div>
      {/* **************** MORTGAGE INS. & OTHER **************** */}
      <div className="payment-container seperate-cols">
        <div className="payment-cell">
          <div className="payment-content">
            <div className="payment-cell" style={{ width: '100%' }}>
              <div className="payment-title-dot mortgage-ins-dot"> </div>
              <div className="payment-content">
                Mortgage ins. & other
              </div>
            </div>
          </div>
          <div className="price-text">
            $
            {nf.format(mortgage)}
          </div>
        </div>
      </div>
    </div>
  );
};

PaymentContainer.propTypes = {
  principal: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  insurance: PropTypes.number.isRequired,
  mortgage: PropTypes.number.isRequired,
};

export default PaymentContainer;
