import React from 'react';

const PreQualified = () => {
  return (
    <div className="pre-qualified-container">
      <div className="payment-cell center-cell">
        <div className="payment-content">
          <div className="qualified-center">
            <button type="button" className="pre-qualified-btn">Get Pre-Qualified</button>
          </div>
        </div>
      </div>
      {/* **************** OR **************** */}
      <div className="payment-container seperate-cols">
        <div className="payment-cell center-cell">
          <div className="payment-content">
            <div className="qualified-center">
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
          <div className="qualified-center">
            <div className="other-text" style={{ color: 'teal' }}>
              See today's mortgage rates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreQualified;
