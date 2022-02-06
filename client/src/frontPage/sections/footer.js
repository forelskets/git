import React from 'react';
import {NavLink} from 'react-router-dom';

const footer = () => {
  return (
  <div>
    <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-8">
              <div className="row">
                <div className="col-md-6 text-area">

                  <div className="align-inline">
                    <a className="footer-brand" href="#">
                      <img
                        src="./images/credit-n-logo-footer.svg"
                        width="45"
                        height="65"
                        className=" align-top"
                        alt=""
                      />
                    </a>
  
                  </div>
                  <p className="paragraph">Start Your Business with Zero Investment
                    and Earn over ₹1,00,000 Every Month. Provide
                    financial advice and products to the customers
                    and get a fast payout every month.</p>
                        </div>
                <div className="col-md-6 info-area">
  
                  <div className="align-inline">
  
                    <div className="m-auto">
                      <i className="fab fa-instagram"></i>                      
                      
                      <i className="fab fa-facebook"></i>


                      <i className="fab fa-twitter"></i>                        
                        
                      <i className="fab fa-youtube"></i>                    </div>
                  </div>
  
                    <div className="button-section align-inline">
                      <button className="btn btn-1 d-inline mx-auto"><img src="images/get-on-playstore.png" alt="" className="img-fluid"/></button>
                    </div>
                     
                            
                    
                  </div>
              </div>
              </div>
                <div className="col-md-4 col-6 img-area">

                  <img src="images/MOBILEPNG.png" className="img-fluid d-md-block d-none" alt="" />
                  <img src="images/mobile-view.png" className="img-fluid d-md-none d-block" alt="" />
                </div>
              </div>
             
            </div>
          
          <div className="text-center text-white p-3 copyright" >
            © 2022 Copyright:
            <NavLink className="text-light" to="https://forelskets.com">Forelsket Softwares Pvt. Ltd.</NavLink>
          </div>
        </section>

       {/* <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-area">

                <div className="align-inline">
                  <NavLink className="footer-brand" to="#">
                    <img
                      src="images/logos1.png"
                      width="45"
                      height="65"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    <p className="company-name">creditIn </p>
                  </NavLink>

                </div>
                <p className="paragraph">Start Your Business with Zero Investment
                  and Earn over ₹1,00,000 Every Month. Provide
                  financial advice and products to the customers
                  and get a fast payout every month.</p>
                      </div>
              <div className="col-md-4 info-area">

                <div className="align-inline">

                  <div className="m-auto">
                    <i className="fas fa-biking"></i>
                    
                    
                    <i className="fas fa-biking"></i>
                    
                      <i className="fas fa-biking"></i>
                      
                      
                        <i className="fas fa-biking"></i>
                  </div>
                </div>

                  <div className="button-section align-inline">
                    <button className="btn btn-3  d-inline">Get the app</button>
                    
                  </div>
                   
                          
                  
                </div>
                <div className="col-md-4 img-area">

                  <img src="images/MOBILE PNG.png" className="img-fluid" alt="" />
                </div>
              </div>
             
            </div>
          
    </section> */}
  </div>
  )
};

export default footer;
