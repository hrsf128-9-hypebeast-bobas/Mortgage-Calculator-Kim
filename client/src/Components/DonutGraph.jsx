/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
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

  // Principal - calculated dash stroke unit, gap unit, and offset
  const prinSegment = ((principal / monthlyMortgage) * 100);
  const prinGap = 100 - prinSegment;
  const pDash = `${prinSegment} ${prinGap}`;

  // Property Tax
  const taxSegment = ((propertyTaxes / monthlyMortgage) * 100);
  const taxGap = 100 - taxSegment;
  const taxOffset = (100 - prinSegment + 25).toString();
  const tDash = `${taxSegment} ${taxGap}`;

  // Home insurance
  const homeSegment = ((homeIns / monthlyMortgage) * 100);
  const homeGap = 100 - homeSegment;
  const hDash = `${homeSegment} ${homeGap}`;
  const homeOffset = (100 - prinSegment - taxSegment + 25).toString();

  // Mortgage insurance
  const mortSegment = ((mortgageIns / monthlyMortgage) * 100);
  const mortGap = 100 - mortSegment;
  const mDash = `${mortSegment} ${mortGap}`;
  const mortOffset = (100 - prinSegment - taxSegment - homeSegment + 25).toString();

  const donutDiv = <DonutEntries pDash={pDash} tDash={tDash} taxOffset={taxOffset} hDash={hDash} homeOffset={homeOffset} mDash={mDash} mortOffset={mortOffset} />;
  const empty = <Empty />;
  return (
    <div className="donut-chart-padding">
      <div className="donut-container">
        {showDonut ? donutDiv : empty}
        <div className="donut-label-padding">
          <div className="donut-labels">
            <div className="donut-price">
              $
              {nf.format(monthlyMortgage)}
            </div>
            <div className="donut-month">
              /month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DonutGraph.propTypes = {
  principal: PropTypes.number.isRequired,
  propertyTaxes: PropTypes.number.isRequired,
  homeIns: PropTypes.number.isRequired,
  mortgageIns: PropTypes.number.isRequired,
  monthlyMortgage: PropTypes.number.isRequired,
};

export default DonutGraph;
