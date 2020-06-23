/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/PaymentContainer.css';

const PreQualified = () => {
  return (
    <div className={styles.preQualifiedContainer}>
      <div className={styles.paymentCell && styles.centerCell}>
        <div className={styles.paymentContent}>
          <div className={styles.qualifiedCenter}>
            <button type="button" className={styles.preQualifiedBtn}>Get Pre-Qualified</button>
          </div>
        </div>
      </div>

      <div className={styles.seperateCols}>
        <div className={styles.paymentCell && styles.centerCell}>
          <div className={styles.paymentContent}>
            <div className={styles.qualifiedCenter}>
              <div className={styles.otherText}>
                or
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seperateCols}>
        <div className={styles.paymentCell && styles.centerCell}>
          <div className={styles.qualifiedCenter}>
            <div className={styles.otherText}>
              See today's mortgage rates
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreQualified;
