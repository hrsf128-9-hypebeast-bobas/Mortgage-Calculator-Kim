import React, { useState } from 'react';

function App() {
  const [homePrice, setHomePrice] = useState(5000);
  const [paymentRate, setPaymentRate] = useState(1);
  const [setDownPaymentTotal] = useState(750);
  const [r, setInterestRate] = useState(0.10);

  const downPaymentTotal = Math.round((homePrice * paymentRate) / 100);

  return (
    <div className="BasicPageLayout__BasicPageContent-sc-7vcr4x-1 eGqAVA">
      <div data-testid="affordability-container" className="StyledSectionContainer__Container-qnx9kh-0 jUHBEY">
        <div className="Padding-sc-1d43y5s-0 StyledSectionContainer__HeadingContainer-qnx9kh-1 cYHVyA">
          <h3 style={{ margin: '0px 0px 8px' }}>
            <div className="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 jXLtij">
              Affordability
            </div>
          </h3>
        </div>
        <div className="Padding-sc-1d43y5s-0 jSqHmA">
          <div className="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 epkfvN">
            Calculate your monthly mortgage payments
          </div>
          <div className="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 cERLyX">
            Your est. payment: $[**enter value here**]/month
          </div>
        </div>
        <div color="default" className="lgGuow">
          <div className="FlexContainers__Rows-sc-1ezkc0e-0 hWRXhR ContentCallout-ciogrk-0 ftXWpB">
            <div data-testid="affordability-interactive-container" className="Grid__GridContainer-sc-5ig2n4-1 eVbKXM">
              {/* **************** HOME PRICE **************** */}
              <div style={{ width: '1,1,1,0.33' }} className="Grid__CellBox-sc-5ig2n4-0 ccvBmo">
                <div className="AffordabilityInputControls__Container-owr020-0 dntInU">
                  <div className="AffordabilityInputControls__FinancialDetail-owr020-1 bALuqS">
                    <div className="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 epkfvN">
                      <label forhtml="homePriceInput">Home Price</label>
                    </div>
                    <input id="homePriceInput" className="dzqnKK" style={{ width: '112px' }} type="text" onChange={(e) => setHomePrice(e.target.value)} value={homePrice} />
                  </div>
                  <div className="InputSlider__InputSliderContainer-sc-1f3z7mk-0 bgApu">
                    {/* Home Price Slider */}
                    <input className="InputSlider__RangeInput-sc-1f3z7mk-1 jUUqqp" type="range" min="0" max="10000" step="10" name="homePrice" onChange={(e) => setHomePrice(e.target.value)} value={homePrice} />
                  </div>
                </div>
              </div>

              {/* ************** DOWN PAYMENT ****************** */}
              <div style={{ width: '1,1,1,0.33' }} className="Grid__CellBox-sc-5ig2n4-0 ccvBmo">
                <div className="AffordabilityInputControls__Container-owr020-0 dntInU">
                  <div className="AffordabilityInputControls__FinancialDetail-owr020-1 bALuqS">
                    <div className="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 epkfvN">
                      <label forhtml="DownPaymentInput">Down Payment</label>
                    </div>
                    <div className="AffordabilityInputControls__DownPaymentInputsWrapper-owr020-4 hRXWuF">
                      {/* left payment */}
                      <input className="Input-sc-13tdpp0-0 AffordabilityInputControls__LeftSplitFinancialInput-owr020-2 gXVAeP" id="DownPaymentInput" style={{ width: '100px' }} type="text" onChange={(e) => setDownPaymentTotal(e.target.value)} value={downPaymentTotal} />
                      {/* Down Payment right Textarea */}
                      <input className="Input-sc-13tdpp0-0 AffordabilityInputControls__RightSplitFinancialInput-owr020-3 hCagOJ" style={{ width: '56px' }} type="text" onChange={(e) => setPaymentRate(e.target.value)} value={(paymentRate)} />
                    </div>
                  </div>
                  <div className="InputSlider__InputSliderContainer-sc-1f3z7mk-0 bgApu">
                    {/* Down Paypment Slider */}
                    <input className="InputSlider__RangeInput-sc-1f3z7mk-1 jUUqqp" type="range" min="0" max="30" onChange={(e) => setPaymentRate(e.target.value)} value={paymentRate} />
                  </div>
                </div>
              </div>

              {/* ************** INTEREST RATE ****************** */}
              <div style={{ width: '1,1,1,0.33' }} className="Grid__CellBox-sc-5ig2n4-0 ccvBmo">
                <div className="AffordabilityInputControls__Container-owr020-0 dntInU">
                  <div className="AffordabilityInputControls__FinancialDetail-owr020-1 bALuqS">
                    <div className="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 epkfvN">
                      <label forhtml="InterestRateInput">Interest Rate</label>
                    </div>
                    <input id="InterestRateInput" className="Input-sc-13tdpp0-0 dzqnKK" style={{ width: '75px' }} type="text" onChange={(e) => setInterestRate(e.target.value)} value={r} />
                  </div>
                  <div className="InputSlider__InputSliderContainer-sc-1f3z7mk-0 bgApu">
                    <input className="InputSlider__RangeInput-sc-1f3z7mk-1 KJNLB" type="range" min="0.0" max="6.50" step="0.10" onChange={(e) => setInterestRate(e.target.value)} value={r} />
                  </div>
                </div>
              </div>

              {/* ************** LOAN TYPE****************** */}
              <div width="1, 1, 1, 0.33" className="Grid__CellBox-sc-5ig2n4-0 ccvBmo">
                <div className="AffordabilityInputControls__Container-owr020-0 dntInU">
                  <div className="AffordabilityInputControls__FinancialDetail-owr020-1 bALuqS">
                    <div className="Text__TextBase-sc-1i9uasc-0-div Text__TextContainerBase-sc-1i9uasc-1 epkfvN">
                      <label forhtml="LoanTypeInput">Loan Type</label>
                    </div>
                  </div>
                  <div className="Select__SelectContainer-sc-1wiporl-0 gGorfE">
                    <div className="MediaBlock__MediaContainer-ldzu2c-0 ilIDoN">
                      <div className="MediaBlock__MediaContent-ldzu2c-1 cbztua">
                        30-year fixed
                      </div>
                      <div className="getUiSvgContainer__SvgContainer-sc-12y8qp5-0 gjmPEU">
                        <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"> </path>
                        </svg>
                      </div>
                    </div>
                    <select id="LoanTypeInput" className="Select__NativeSelect-sc-1wiporl-1 gpXBeM">
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
