/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PreQualifiedItems from './PreQualifiedItems';

const PreQualified = () => {
  const dataArray = [
    {
      id: 23423,
      item: <button type="button" className="pre-qualified-btn">Get Pre-Qualified</button>,
    },
    {
      id: 233242423,
      item: 'or',
    },
    {
      id: 323241,
      item: <a href="https://www.trulia.com/mortgage-rates/Palo_Alto,CA/?cta=rates&auto=true&value=4798000&down=959600&zip=94306&loantype=purchase">See today's mortgage rates</a>,
    },
  ];

  return (
    <div>
      {dataArray.map((data) => <PreQualifiedItems key={data.id} data={data} />)}
    </div>
  );
};

export default PreQualified;
