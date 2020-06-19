import React, { useState } from 'react';
import PreQualified from './PreQualified.jsx';

function App() {
  const [homePriceVal, sethomePriceVal] = useState(4798000);
  const [downPaymentRate, setPaymentRate] = useState(20);
  const [setDownPaymentTotal] = useState(750);
  const [interestRate, setInterestRate] = useState(3.49);
  const [loanType, setLoanType] = useState('30-year fixed');

  let mortgageIns = 0;

  const nf = new Intl.NumberFormat(); // adds commas
  const downPaymentTotal = Math.round((homePriceVal * downPaymentRate) / 100);
  const homePriceFormat = `$${nf.format(homePriceVal)}`;
  const downPaymentFormat = `$${nf.format(downPaymentTotal)}`;
  const downPaymentRateFormat = `${downPaymentRate}%`;
  const interestRateFormat = `${interestRate}%`;

  /* *** COMPOUND INTEREST FORMULA *** */
  const months = 15;
  const N = months * 12;
  const P = homePriceVal - downPaymentTotal;
  const r = Number(((interestRate / 100).toFixed(5) / 12).toFixed(5));
  const top = ((1 + r) ** N).toFixed(3);
  const principalInterestVal = Math.ceil(P * ((r * top) / ((top) - 1)));

  /* *** PROPERTY TAX FORMULA *** */
  const propertyTaxes = Math.ceil((homePriceVal * 0.01) / 12);

  /* *** HOME INSURANCE *** */
  const insurance = 75;

  /* *** MORTAGE INS. FORMULA *** */
  if ((downPaymentTotal) === 0) {
    mortgageIns = 0;
  } else if ((downPaymentRate / 100) < 0.20) {
    mortgageIns = Math.ceil(100 / (downPaymentRate / 100));
  } else {
    mortgageIns = 0;
  }

  /* *** MONTHLY MORTGAGE PAYMENTS *** */
  const monthlyMortgage = nf.format(principalInterestVal + propertyTaxes + insurance + mortgageIns);

  return (
    <div className="pageLayout">
      <div className="affordability-container">
        <div className="affordability-text">
          Affordability
        </div>
        <div className="calculation-container">
          <div className="calculation-text">
            Calculate your monthly mortgage payments
          </div>
          <div className="est-payment">
            Your est. payment: $
            {monthlyMortgage}
            /month
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
                    <input id="homePriceInput" className="home-price-input" style={{ width: '112px' }} type="text" onChange={(e) => sethomePriceVal(e.target.value)} value={homePriceFormat} />
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
                    <input id="InterestRateInput" className="interest-rate-input" style={{ width: '75px' }} type="text" onChange={(e) => setInterestRate(e.target.value)} value={interestRateFormat} />
                  </div>
                  <div className="slider-container">
                    <input className="range" type="range" min="0.0" max="6.50" step="0.10" onChange={(e) => setInterestRate(e.target.value)} value={interestRate} />
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
                    <select id="LoanTypeInput" value={loanType} className="select-input" onChange={(e) => { setInterestRate(Number((e.target.value).slice(0, 4))); setLoanType((e.target.value).slice(5)); }}>
                      <option value="3.49 30-year fixed">30-year fixed</option>
                      <option value="3.27 20-year fixed">20-year fixed</option>
                      <option value="2.86 15-year fixed">15-year fixed</option>
                      <option value="2.97 10-year fixed">10-year fixed</option>
                      <option value="3.06 FHA 30-year fixed">FHA 30-year fixed</option>
                      <option value="2.89 FHA 15-year fixed">FHA 15-year fixed</option>
                      <option value="2.84 VA 30-year fixed">VA 30-year fixed</option>
                      <option value="2.69 VA 15-year fixed">VA 15-year fixed</option>
                    </select>
                  </div>
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
          { /* https://medium.com/@heyoka/scratch-made-svg-donut-pie-charts-in-html5-2c587e935d72 */}
          <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
            <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"> </circle>
            <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"> </circle>
            <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3"> </circle>
          </svg>
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
                $
                {nf.format(principalInterestVal)}
              </div>
            </div>
          </div>
          {/* **************** PROPERTY TAX **************** */}
          <div className="payment-container seperate-cols">
            <div className="payment-cell">
              <div className="payment-content">
                <div className="payment-cell" style={{ width: '100%' }}>
                  <div className="payment-title-dot property-tax-dot">{/* to get rid of syntax error */}</div>
                  <div className="payment-content">
                    Property Taxes
                  </div>
                </div>
              </div>
              <div className="price-text">
                $
                {nf.format(propertyTaxes)}
              </div>
            </div>
          </div>
          {/* **************** HOME INSURANCE **************** */}
          <div className="payment-container seperate-cols">
            <div className="payment-cell">
              <div className="payment-content">
                <div className="payment-cell" style={{ width: '100%' }}>
                  <div className="payment-title-dot home-insurance-dot"> </div>
                  <div className="payment-content">
                    Home Insurance
                  </div>
                </div>
              </div>
              <div className="price-text">
                $
                {insurance}
              </div>
            </div>
          </div>
          {/* **************** MORTGAGE INS. & OTHER **************** */}
          <div className="payment-container seperate-cols">
            <div className="payment-cell">
              <div className="payment-content">
                <div className="payment-cell" style={{ width: '100%' }}>
                  <div className="payment-title-dot mortgage-ins-dot"> </div>
                  <div className="payment-content">
                    Mortgage ins. & other
                  </div>
                </div>
              </div>
              <div className="price-text">
                $
                {nf.format(mortgageIns)}
              </div>
            </div>
          </div>
          {/* TO DO: increase padding between cells later */}
          <div className="extra-padding"> </div>
          <div>
            <PreQualified />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
