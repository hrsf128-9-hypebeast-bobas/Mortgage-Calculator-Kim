import React from 'react';

const PaymentItems = ({ item }) => {
  const {
    dot, paymentContent, priceText,
  } = item;

  return (
    <div>
      <div className="payment-container seperate-cols">
        <div className="payment-cell">
          <div className="payment-content">
            <div className="payment-cell" style={{ width: '100%' }}>
              <div className={dot}>{/**/}</div>
              <div className="payment-content">
                {paymentContent}
              </div>
            </div>
          </div>
          <div className="price-text">
            {priceText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentItems;
