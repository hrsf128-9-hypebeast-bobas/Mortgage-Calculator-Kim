import React from 'react';
import PropTypes from 'prop-types';

const CostDetails = (props) => {
  const {
    monthlyMortgage,
  } = props;

  return (
    <div>
      <div className="affordability-text">
        Affordability
      </div>
      <div className="calculation-container">
        <div className="calculation-text">
          Calculate your monthly mortgage payments
        </div>
        <div className="est-payment">
          Your est. payment: $
          {monthlyMortgage}
          /month
        </div>
      </div>
    </div>
  );
};

CostDetails.propTypes = {
  monthlyMortgage: PropTypes.string.isRequired,
};

export default CostDetails;
