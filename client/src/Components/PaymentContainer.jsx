import React from 'react';
import PropTypes from 'prop-types';
import PaymentItems from './PaymentItems';

const PaymentContainer = (props) => {
  const {
    principal, taxes, homeIns, mortgage,
  } = props;

  const nf = new Intl.NumberFormat(); // adds commas

  const dataArray = [
    {
      id: 2343242, // instantiates unique id for each child to resolve warning
      dot: 'payment-title-dot principal-dot',
      paymentContent: 'Principal & Interest',
      priceText: `$${nf.format(principal)}`,
    },
    {
      id: 9840914,
      dot: 'payment-title-dot property-tax-dot',
      paymentContent: 'Property Taxes',
      priceText: `$${nf.format(taxes)}`,
    },
    {
      id: 309223454,
      dot: 'payment-title-dot home-insurance-dot',
      paymentContent: 'Home Insurance',
      priceText: `$${nf.format(homeIns)}`,
    },
    {
      id: 19489843,
      dot: 'payment-title-dot mortgage-ins-dot',
      paymentContent: 'Mortgage ins. & other',
      priceText: `$${nf.format(mortgage)}`,
    },
  ];

  return (
    <div>
      {dataArray.map((item) => <PaymentItems key={item.id} item={item} />)}
    </div>
  );
};

PaymentContainer.propTypes = {
  principal: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  homeIns: PropTypes.number.isRequired,
  mortgage: PropTypes.number.isRequired,
};

export default PaymentContainer;
