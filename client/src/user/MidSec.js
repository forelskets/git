import React from 'react';
import './userStyle.css';

     

const MidSec= () => {
  return (
  <div>
      <div className="home-section">
      
      <div class="home-content">
        <div class="container">
          <div class="row">
            <div class="sales-boxes">
              <div class="col-sm-9">
                <div class="row">
                  <div class="overview-boxes">
                    <div class="box col-sm-4">
                      <div class="right-side">
                        <div class="box-topic">Total Order</div>
                        <div class="number">40,876</div>
                      </div>
                      <i class="fas fa-money-bill-wave-alt"></i>
                    </div>

                    <div class="box col-sm-4">
                      <div class="right-side">
                        <div class="box-topic">Total Profit</div>
                        <div class="number">$12,876</div>
                      </div>
                      <i class="bx bx-cart cart three"></i>
                    </div>
                    <div class="box col-sm-4">
                      <div class="right-side">
                        <div class="box-topic">Total Return</div>
                        <div class="number">11,086</div>
                        {/* <div class="indicator">
                          <i class="fas fa-dollar-sign"></i>
                          <span class="text">Down From Today</span>
                        </div>  */}
                      </div>
                      <i class="fas fa-hand-holding-usd"></i>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="recent-sales box">
                    <div class="title">Recent Sales</div>

                    <div></div>
                  </div>
                </div>
              </div>

              <div class="top-sales box col-sm-3">
                <div class="title">Profile</div>
                <ul class="top-sales-details">
                  <li>
                    <a href="#">
                      <img src="images/sunglasses.jpg" alt="" />
                      <span class="profile-name">subham singh</span>
                    </a>
                  </li>
                  <br /><br />

                  <li>
                    <span class="left-text"> name </span>

                    <input
                      type="text"
                      class="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span class="left-text">mobile no.</span>

                    <input
                      type="text"
                      class="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span class="left-text">cr. score</span>

                    <input
                      type="text"
                      class="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span class="left-text">address</span>

                    <input
                      type="text"
                      class="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span class="left-text">baga</span>

                    <input
                      type="text"
                      class="input-area"
                      value="sunny jadaun"
                    />
                  </li>

                  <li>
                    <span class="left-text">Addidas </span>

                    <input
                      type="text"
                      class="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span class="left-text">password </span>

                    <input
                      type="password"
                      class="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                </ul>
                <button class="btns">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </div>
  </div>);
};

export default MidSec;
