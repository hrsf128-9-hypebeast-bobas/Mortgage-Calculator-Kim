import React, { useState } from 'react';

function App() {
  const [homePrice, setHomePrice] = useState(5000);
  const [paymentRate, setPaymentRate] = useState(1);
  const [setDownPaymentTotal] = useState(750);
  const [r, setInterestRate] = useState(0.10);
  // const [loanType, setLoanRate];

  const nf = new Intl.NumberFormat();
  const downPaymentTotal = Math.round((homePrice * paymentRate) / 100);
  const homePriceSign = `$${nf.format(homePrice)}`;
  const downPaymentSign = `$${downPaymentTotal.toLocaleString()}`;
  const paymentRateSign = `${paymentRate}%`;
  const rSign = `${r}%`;

  return (
    <div className="pageLayout">
      <div className="container">
        <div className="affordability-padding">
          <h3 style={{ margin: '0px 0px 8px' }}>
            <div className="affordability-text">
              Affordability
            </div>
          </h3>
        </div>
        <div className="calculation-padding">
          <div className="calculation-text">
            Calculate your monthly mortgage payments
          </div>
          <div className="est-payment">
            Your est. payment: $[**enter value here**]/month
          </div>
        </div>
        <div color="default" className="input-container">
          <div className="flex-container-padding">
            <div className="grid-container">
              {/* **************** HOME PRICE **************** */}
              <div style={{ width: '1,1,1,0.33' }} className="grid-cell-box grid-flex">
                <div className="input-container ">
                  <div className="financial-detail ">
                    <div className="text-container">
                      <label forhtml="homePriceInput">Home Price</label>
                    </div>
                    <input id="homePriceInput" className="price-input-container" style={{ width: '112px' }} type="text" onChange={(e) => setHomePrice(e.target.value)} value={homePriceSign} />
                  </div>
                  <div className="slider-container">
                    {/* Home Price Slider */}
                    <input className="range" type="range" min="0" max="10000" step="10" name="homePrice" onChange={(e) => setHomePrice(e.target.value)} value={homePrice} />
                  </div>
                </div>
              </div>

              {/* ************** DOWN PAYMENT ****************** */}
              <div style={{ width: '1,1,1,0.33' }} className="grid-cell-box grid-flex">
                <div className="input-container ">
                  <div className="financial-detail ">
                    <div className="text-container">
                      <label forhtml="DownPaymentInput">Down Payment</label>
                    </div>
                    <div className="down-payment-wrapper">
                      {/* left payment */}
                      <input className="left-split-financial-input" id="DownPaymentInput" style={{ width: '100px' }} type="text" onChange={(e) => setDownPaymentTotal(e.target.value)} value={downPaymentSign} />
                      {/* Down Payment right Textarea */}
                      <input className="right-split-financial-input" style={{ width: '56px' }} type="text" onChange={(e) => setPaymentRate(e.target.value)} value={(paymentRateSign)} />
                    </div>
                  </div>
                  <div className="slider-container">
                    {/* Down Paypment Slider */}
                    <input className="range" type="range" min="0" max="30" onChange={(e) => setPaymentRate(e.target.value)} value={paymentRate} />
                  </div>
                </div>
              </div>

              {/* ************** INTEREST RATE ****************** */}
              <div style={{ width: '1,1,1,0.33' }} className="grid-cell-box grid-flex">
                <div className="input-container ">
                  <div className="financial-detail ">
                    <div className="text-container">
                      <label forhtml="InterestRateInput">Interest Rate</label>
                    </div>
                    <input id="InterestRateInput" className="price-input-container" style={{ width: '75px' }} type="text" onChange={(e) => setInterestRate(e.target.value)} value={rSign} />
                  </div>
                  <div className="slider-container">
                    <input className="range" type="range" min="0.0" max="6.50" step="0.10" onChange={(e) => setInterestRate(e.target.value)} value={r} />
                  </div>
                </div>
              </div>

              {/* ************** LOAN TYPE****************** */}
              <div width="1, 1, 1, 0.33" className="grid-cell-box grid-flex">
                <div className="input-container ">
                  <div className="financial-detail ">
                    <div className="text-container">
                      <label forhtml="LoanTypeInput">Loan Type</label>
                    </div>
                  </div>
                  <div className="select-container">
                    <div className="media-container">
                      <div className="media-content">
                        30-year fixed
                      </div>
                      <div className="svg-container">
                        <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"> </path>
                        </svg>
                      </div>
                    </div>
                    <select id="LoanTypeInput" className="select-input">
                      <option data-idx="0" value="30-year fixed">30-year fixed</option>
                      <option data-idx="1" value="20-year fixed">20-year fixed</option>
                      <option data-idx="2" value="15-year fixed">15-year fixed</option>
                      <option data-idx="3" value="10-year fixed">10-year fixed</option>
                      <option data-idx="4" value="FHA 30-year fixed">FHA 30-year fixed</option>
                      <option data-idx="5" value="FHA 15-year fixed">FHA 15-year fixed</option>
                      <option data-idx="6" value="VA 30-year fixed">VA 30-year fixed</option>
                      <option data-idx="7" value="VA 15-year fixed">VA 15-year fixed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Affordability__GraphTableContainer-sc-1waefr9-0 hIMqqi">
          <div className="Affordability__DonutChartContainer-sc-1waefr9-1 BmTlN">

          </div>
          <div className="AffordabilityTable__Container-dnla82-0 eyGlrx">

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

/* Home Price:
{homePrice}
<br />
Down Payment Rate:
{paymentRate}
%
<br />
Down Payment Total:
{downPaymentTotal}
<br />
Interest Rate:
{r}
% */
