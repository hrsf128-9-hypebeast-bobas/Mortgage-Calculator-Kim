import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CostDetails.css';

const CostDetails = (props) => {
  const {
    monthlyMortgage,
  } = props;

  return (
    <div>
      <div className={styles.affordabilityText}>
        Affordability
      </div>
      <div className={styles.calculationContainer}>
        <div className={styles.calculationText}>
          Calculate your monthly mortgage payments
        </div>
        <div className={styles.estPayment}>
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
