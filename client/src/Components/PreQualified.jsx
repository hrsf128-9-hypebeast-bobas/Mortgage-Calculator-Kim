import React from 'react';
import PreQualifiedItems from './PreQualifiedItems';

const PreQualified = () => {
  const dataArray = [
    {
      item: <button type="button" className="pre-qualified-btn">Get Pre-Qualified</button>,
    },
    {
      item: 'or',
    },
    {
      item: <a href="https://www.trulia.com/mortgage-rates/Palo_Alto,CA/?cta=rates&auto=true&value=4798000&down=959600&zip=94306&loantype=purchase">See today's mortgage rates</a>,
    },
  ];

  return (
    <div>
      {dataArray.map((data, index) => <PreQualifiedItems key={index} data={data} />)}
    </div>
  );
};

export default PreQualified;
