import React from 'react';
import styles from '../styles/DonutGraph.css';

const DonutEntries = (props) => {
  const {
    principalDashStroke, taxDashStroke, taxOffset, homeInsDashStroke, homeOffset, mortgageDashStroke, mortOffset,
  } = props;

  return (
    <div className={styles.donutSize}>
      <svg viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="12" fill="#fff"> </circle>

        {/* principal segement */}
        <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(5, 34, 134)" strokeWidth="3.8" strokeDasharray={principalDashStroke} strokeDashoffset="25"> </circle>

        {/* Property tax segement*/}
        <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(0, 173, 187)" strokeWidth="3.8" strokeDasharray={taxDashStroke} strokeDashoffset={taxOffset}> </circle>

        {/* home insurance segement*/}
        <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(194, 213, 0)" strokeWidth="3.8" strokeDasharray={homeInsDashStroke} strokeDashoffset={homeOffset}> </circle>

        {/* mortgage insurance segement*/}
        <circle cx="18" cy="18" r="15.915494309189533" fill="transparent" stroke="rgb(206, 182, 255)" strokeWidth="3.8" strokeDasharray={mortgageDashStroke} strokeDashoffset={mortOffset}> </circle>
      </svg>
    </div>
  );
};

export default DonutEntries;
