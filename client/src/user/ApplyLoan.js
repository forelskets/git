import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoanForm from './LoanForm';

const ApplyLoan = () => {
    const [lstatus,setLstatus] = useState(false);
    const LoanFunc =()=>{
        setLstatus(true);
    }

    
  return (
  <div>
    
    <section>    

      <div className="home-content">
        <div className="container">
          <div className="row">
            <div className="sales-boxes">
              <div className="col-sm-9">
                <div className="row">
                  <div className="overview-boxes">
                    <div className="box col-sm-4">
                      <div className="right-side">
                        <div className="box-topic">Active Loans</div>
                        <div className="number">0</div>
                      </div>
                      <i className="fas fa-money-bill-wave-alt"></i>
                    </div>

                    <div className="box col-sm-4">
                      <div className="right-side">
                        <div className="box-topic">Loan Amount</div>
                        <div className="number">$12,876</div>
                      </div>
                      <i className="bx bx-cart cart three"></i>
                    </div>
                    <div className="box col-sm-4">
                      <div className="right-side">
                        <div className="box-topic">Total Earning</div>
                        <div className="number">11,086</div>
                        
                      </div>
                      <i className="fas fa-hand-holding-usd"></i>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="recent-sales box">
                    <div className="row-title mb-3 py-3" onClick={LoanFunc}>Apply For Loans</div>
                       {(lstatus) ? <LoanForm /> :""}
                  </div>
                </div>
              </div>

              <div className="top-sales box col-sm-3">
                <div className="title">Profile</div>
                <ul className="top-sales-details">
                  <li>
                    <NavLink to="#">
                      <img src="images/sunglasses.jpg" alt="" />
                      <span className="profile-name">subham singh</span>
                    </NavLink>
                  </li>
                  <br /><br />

                  <li>
                    <span className="left-text"> name </span>

                    <input
                      type="text"
                      className="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span className="left-text">mobile no.</span>

                    <input
                      type="text"
                      className="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span className="left-text">cr. score</span>

                    <input
                      type="text"
                      className="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span className="left-text">address</span>

                    <input
                      type="text"
                      className="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span className="left-text">baga</span>

                    <input
                      type="text"
                      className="input-area"
                      value="sunny jadaun"
                    />
                  </li>

                  <li>
                    <span className="left-text">Addidas </span>

                    <input
                      type="text"
                      className="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                  <li>
                    <span className="left-text">password </span>

                    <input
                      type="password"
                      className="input-area"
                      value="sunny jadaun"
                    />
                  </li>
                </ul>
                <button className="btns">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   

  </div>)
};

export default ApplyLoan;
