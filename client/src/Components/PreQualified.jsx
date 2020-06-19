import React from 'react';

const PreQualified = () => {
  console.log('hi');
  return (
    <div className="pre-qualified-container">
      <div className="payment-cell center-cell">
        <div className="payment-content">
          <div style={{ width: '50%' }}>
            <div className="btn">
              <button type="button">Get Pre-Qualified</button>
            </div>
          </div>
        </div>
      </div>
      {/* **************** OR **************** */}
      <div className="payment-container seperate-cols">
        <div className="payment-cell center-cell">
          <div className="payment-content">
            <div style={{ width: '50%' }}>
              <div className="other-text">
                or
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* **************** SEE TODAY'S MORTGAGE RATES **************** */}
      <div className="payment-container seperate-cols">
        <div className="payment-cell center-cell">
          <div className="payment-content">
            <div style={{ width: '50%' }}>
              <div className="other-text" style={{ color: 'teal' }}>
                See today's mortgage rates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreQualified;
