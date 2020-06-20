import React from 'react';
import PropTypes from 'prop-types';

const DonutGraph = (props) => {
  return (
    <div className="affordability-donut-graph">
      { /* https://medium.com/@heyoka/scratch-made-svg-donut-pie-charts-in-html5-2c587e935d72 */}
      <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
        <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"> </circle>
        <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"> </circle>
        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3"> </circle>
      </svg>
    </div>

  );
};

DonutGraph.propTypes = {

};

export default DonutGraph;
