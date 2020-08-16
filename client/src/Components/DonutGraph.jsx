import React from 'react';
import styles from '../styles/DonutGraph.css';
import DonutEntries from './DonutEntries';
import Empty from './Empty';

const DonutGraph = (props) => {
  let showDonut = true;

  const {
    principal, propertyTaxes, homeIns, mortgageIns, monthlyMortgage,
  } = props;

  const nf = new Intl.NumberFormat();

  if (principal === 0) {
    showDonut = false;
  }

  // CALCULATION FOR DASH STROKE UNIT, GAP UNIT AND OFF SET //
  // Principal
  const princialSegment = ((principal / monthlyMortgage) * 100);
  const principalGapUnit = 100 - princialSegment;
  const principalDashStroke = `${princialSegment} ${principalGapUnit}`;

  // Property Tax
  const taxSegment = ((propertyTaxes / monthlyMortgage) * 100);
  const taxGap = 100 - taxSegment;
  const taxOffset = (100 - princialSegment + 25).toString();
  const taxDashStroke = `${taxSegment} ${taxGap}`;

  // Home insurance
  const homeSegment = ((homeIns / monthlyMortgage) * 100);
  const homeGap = 100 - homeSegment;
  const homeInsDashStroke = `${homeSegment} ${homeGap}`;
  const homeOffset = (100 - princialSegment - taxSegment + 25).toString();

  // Mortgage insurance
  const mortSegment = ((mortgageIns / monthlyMortgage) * 100);
  const mortGap = 100 - mortSegment;
  const mortgageDashStroke = `${mortSegment} ${mortGap}`;
  const mortOffset = (100 - princialSegment - taxSegment - homeSegment + 25).toString();

  const donutDiv = <DonutEntries principalDashStroke={principalDashStroke} taxDashStroke={taxDashStroke} taxOffset={taxOffset} homeInsDashStroke={homeInsDashStroke} homeOffset={homeOffset} mortgageDashStroke={mortgageDashStroke} mortOffset={mortOffset} />;

  // display empty donut chart when input value is 0
  const empty = <Empty />;

  return (
    <div className={styles.donutChartPadding}>
      <div className={styles.donutContainer}>
        {showDonut ? donutDiv : empty}
        <div className={styles.donutLabelPadding}>
          <div className={styles.donutLabels}>
            <div className={styles.donutPrice}>
              $
              {nf.format(monthlyMortgage)}
            </div>
            <div className={styles.donutMonth}>
              /month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutGraph;
