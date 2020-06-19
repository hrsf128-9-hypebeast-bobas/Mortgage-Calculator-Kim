import React, { useState } from 'react';

function App() {
  const [homePriceVal, sethomePriceVal] = useState(4798000);
  const [downPaymentRate, setPaymentRate] = useState(1);
  const [setDownPaymentTotal] = useState(750);
  const [r, setInterestRate] = useState(0.10);
  const [loanType, setType] = useState('30-year fixed');

  const nf = new Intl.NumberFormat(); // adds commas
  const downPaymentTotal = Math.round((homePriceVal * downPaymentRate) / 100);
  const homePriceFormat = `$${nf.format(homePriceVal)}`;
  const downPaymentFormat = `$${nf.format(downPaymentTotal)}`;
  const downPaymentRateFormat = `${downPaymentRate}%`;
  const interestRateFormat = `${r}%`;

  return (
    <div className="pageLayout">
      <div className="affordability-text">
        Affordability
      </div>
      <div className="calculation-container">
        <div className="calculation-text">
          Calculate your monthly mortgage payments
        </div>
        <div className="est-payment">
          Your est. payment: $[**enter value here**]/month
        </div>
      </div>
      <div className="input-container">
        <div className="flex-container-padding">
          <div className="grid-container-padding">
            {/* **************** HOME PRICE **************** */}
            <div className="grid-cell-box grid-flex">
              <div className="input-container ">
                <div className="financial-detail ">
                  <div className="text-container">
                    Home Price
                  </div>
                  {/* <span>
                    $ */}
                  <input id="homePriceInput" className="price-input-container" style={{ width: '112px' }} type="text" onChange={(e) => sethomePriceVal(e.target.value)} value={homePriceFormat} />
                  {/* </span> */}
                </div>
                <div className="slider-container">
                  {/* Home Price Slider */}
                  <input className="range" type="range" min="0" max="8000000" step="10" name="homePriceVal" onChange={(e) => sethomePriceVal(e.target.value)} value={homePriceVal} />
                </div>
              </div>
            </div>

            {/* ************** DOWN PAYMENT ****************** */}
            <div className="grid-cell-box grid-flex">
              <div className="input-container ">
                <div className="financial-detail ">
                  <div className="text-container">
                    {/* <label forhtml="DownPaymentInput">Down Payment</label> */}
                    Down Payment
                  </div>
                  <div className="down-payment-wrapper">
                    {/* left payment */}
                    <input className="left-split-financial-input" id="DownPaymentInput" style={{ width: '100px' }} type="text" onChange={(e) => setDownPaymentTotal(e.target.value)} value={downPaymentFormat} />
                    {/* Down Payment right Textarea */}
                    <input className="right-split-financial-input" style={{ width: '56px' }} type="text" onChange={(e) => setPaymentRate(e.target.value)} value={(downPaymentRateFormat)} />
                  </div>
                </div>
                <div className="slider-container">
                  {/* Down Paypment Slider */}
                  <input className="range" type="range" min="0" max="30" onChange={(e) => setPaymentRate(e.target.value)} value={downPaymentRate} />
                </div>
              </div>
            </div>

            {/* ************** INTEREST RATE ****************** */}
            <div className="grid-cell-box grid-flex">
              <div className="input-container ">
                <div className="financial-detail ">
                  <div className="text-container">
                    {/* <label forhtml="InterestRateInput">Interest Rate</label> */}
                    Interest Rate
                  </div>
                  <input id="InterestRateInput" className="price-input-container" style={{ width: '75px' }} type="text" onChange={(e) => setInterestRate(e.target.value)} value={interestRateFormat} />
                </div>
                <div className="slider-container">
                  <input className="range" type="range" min="0.0" max="6.50" step="0.10" onChange={(e) => setInterestRate(e.target.value)} value={r} />
                </div>
              </div>
            </div>

            {/* ************** LOAN TYPE****************** */}
            <div className="grid-cell-box grid-flex">
              <div className="input-container ">
                <div className="financial-detail ">
                  <div className="text-container">
                    {/* <label forhtml="LoanTypeInput">Loan Type</label> */}
                    Loan Type
                  </div>
                </div>
                <div className="select-container">
                  <div className="drop-down-container">
                    <div className="drop-down-arrow ">
                      {loanType}
                    </div>
                    <div className="svg-container">
                      <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"> </path>
                      </svg>
                    </div>
                  </div>
                  <select id="LoanTypeInput" value={loanType} className="select-input" onChange={(e) => setType(e.target.value)}>
                    <option value="30-year fixed">30-year fixed</option>
                    <option value="20-year fixed">20-year fixed</option>
                    <option value="15-year fixed">15-year fixed</option>
                    <option value="10-year fixed">10-year fixed</option>
                    <option value="FHA 30-year fixed">FHA 30-year fixed</option>
                    <option value="FHA 15-year fixed">FHA 15-year fixed</option>
                    <option value="VA 30-year fixed">VA 30-year fixed</option>
                    <option value="VA 30-year fixed">VA 15-year fixed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************** GRAPH CONTAINER  ****************** */}
      <div className="graph-container">
        {/* ************** VISUAL GRAPH  ****************** */}
        <div className="affordability-donut-graph">
          {/* to do */}
        </div>
        {/* ************** GRAPH INFO ****************** */}
        <div className="affordability-table">
          {/* **************** PRINCIPLE AND INTEREST **************** */}
          <div className="payment-container seperate-cols">
            <div className="payment-cell">
              <div className="payment-content">
                <div className="payment-cell" style={{ width: '100%' }}>
                  <div className="payment-title-dot principal-dot">{/**/}</div>
                  <div className="payment-content">
                    Principal & Interest
                  </div>
                </div>
              </div>
              <div className="price-text">
                Change
                {/* principal and interst */}
              </div>
            </div>
          </div>
          {/* **************** PROPERTY TAX **************** */}
          <div className="payment-container seperate-cols">
            <div className="payment-cell">
              <div className="payment-content">
                <div className="payment-cell" style={{ width: '100%' }}>
                  <div color="rgb(0, 173, 187)" className="payment-title-dot property-tax-dot">{/* to get rid of syntax error */}</div>
                  <div className="payment-content">
                    Property Taxes
                  </div>
                </div>
              </div>
              <div className="price-text">
                Change
                {/* change this to a formula */}
              </div>
            </div>
          </div>
          {/* **************** HOME INSURANCE **************** */}
          <div className="payment-container seperate-cols">
            <div className="payment-cell">
              <div className="payment-content">
                <div className="payment-cell" style={{ width: '100%' }}>
                  <div className="payment-title-dot home-insurance-dot">{/* to get rid of syntax error */}</div>
                  <div className="payment-content">
                    Home Insurance
                  </div>
                </div>
              </div>
              <div className="price-text">
                Change
                {/* change this to a formula */}
              </div>
            </div>
          </div>
          {/* **************** MORTGAGE INS. & OTHER **************** */}
          <div className="payment-container seperate-cols">
            <div className="payment-cell">
              <div className="payment-content">
                <div className="payment-cell" style={{ width: '100%' }}>
                  <div className="payment-title-dot mortgage-ins-dot">{/* to get rid of syntax error */}</div>
                  <div className="payment-content">
                    Mortgage ins. & other
                  </div>
                </div>
              </div>
              <div className="price-text">
                Change
                {/* change this to a formula */}
              </div>
            </div>
          </div>
          <div className="padding-btw-container">{/**/}</div>
          <div className="pre-qualified-btn hJcSpo">{/* to do: the get pre-qualified button */}</div>
        </div>
      </div>
    </div>

  );
}

export default App;
