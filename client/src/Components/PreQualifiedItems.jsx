/* eslint-disable react/prop-types */
import React from 'react';

const PreQualifiedItems = ({ data }) => {
  const {
    item,
  } = data;

  return (
    <div className="payment-container seperate-cols">
      <div className="payment-cell center-cell">
        <div className="payment-content">
          <div className="qualified-center">
            <div className="other-text">
              {item}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreQualifiedItems;
