import React,{useRef} from 'react';
import {Link} from 'react-router-dom'

const LoanForm = () => {
    const EmployeeDatails = useRef(null);
    const BasicDetails = useRef(null);
    const KYCDetails = useRef(null);

    const ClickEmployeeDetails =()=>{
           EmployeeDatails.current.click();
    }

    const BasicDetailsFunc = ()=>{
        BasicDetails.current.click();
    }
    const KYCFunc = () =>{
        KYCDetails.current.click();
    }
  return (
  <>
     <div className="form-padding">
                      <div className="row my-3">
                        <div className="col-md-3">
                          <div className="form-group">
                            <select id="inputState" className="form-control">
                              <option selected>Purpose Of Loan</option>
                              <option>Education Loan</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <select id="inputState" className="form-control">
                              <option selected>age</option>
                              <option>...</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="col-12 m-auto">
                          <form action="" method="post" id="registration">
                            <nav className="recent-sales-box-nav">
                              <div
                                className="nav nav-pills nav-fill"
                                id="nav-tab"
                                role="tablist"
                              >
                                <Link
                                  className="nav-link active recent-nav-tab"
                                  id="step1-tab"
                                  data-bs-toggle="tab"
                                  to="#step1"
                                  ref={BasicDetails}
                                  >Basic Information
                                  </Link>
                                <Link
                                  className="nav-link recent-nav-tab"
                                  id="step2-tab"
                                  data-bs-toggle="tab"
                                  to="#step2"
                                  ref={EmployeeDatails}
                                  >Employement Details
                                  </Link>
                                <Link
                                  className="nav-link recent-nav-tab"
                                  id="step3-tab"
                                  data-bs-toggle="tab"
                                  to="#step3"
                                  ref={KYCDetails}
                                  >KYC Details</Link>
                              </div>
                            </nav>
                            <div className="tab-content py-4">
                              <div className="tab-pane fade show active" id="step1">
                                <form className="form-1">
                                  <div className="form-row row my-3">
                                    <div className="form-group col-md-4">
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="fname"
                                        placeholder=" First Name"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="lname"
                                        placeholder=" Last Name"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputfatherName"
                                        placeholder="Fathers Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row my-3 row">
                                    <div className="form-group col-md-4">
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        placeholder="Email"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="date"
                                        className="form-control"
                                        id="inputDob"
                                        placeholder="Date Of Birth"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputMobile"
                                        placeholder="mobile Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group my-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputAddress"
                                      placeholder="1234 Main Street aligarh"
                                    />
                                  </div>
                                  <div className="form-group my-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputAddress2"
                                      placeholder="Apartment, studio, or floor"
                                    />
                                  </div>
                                  <div className="form-row my-3 row">
                                    <div className="form-group col-md-4">
                                      <label for="inputState">State</label>
                                      <select
                                        id="inputState"
                                        className="form-control"
                                      >
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                      </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                      <label for="inputZip"> ZIP Code</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputZip"
                                      />
                                    </div>
                                  </div>
                                  <div className="row justify-content-between my-3">
                                    <div className="col-auto"></div>
                                    <div className="col-auto">
                                      <button
                                        type="button"
                                        className="btn form-btn"
                                        data-enchanter="next"
                                      onClick={ClickEmployeeDetails}>
                                        Next
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="tab-pane fade" id="step2">
                                <form className="form-2">
                                  <div className="form-row row my-3">
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="CurrentCompanyName"
                                        placeholder="Current company name"
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="Designination"
                                        placeholder="Post/Designination"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row my-3 row">
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputCurrenExp"
                                        placeholder="Current Work Expirience"
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputDob"
                                        placeholder="Total Work Expirience"
                                      />
                                    </div>
                                  </div>
                                  <div className="row form-row">
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputMobile"
                                        placeholder="Monthly Income"
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputMobile"
                                        placeholder="Annual Income"
                                      />
                                    </div>
                                  </div>
                                  <div className="row justify-content-between my-3">
                                    <div className="col-auto">
                                      <button
                                        type="button"
                                        className="btn form-btn"
                                        
                                        onClick={BasicDetailsFunc}
                                      >
                                        Previous
                                      </button>
                                    </div>
                                    <div className="col-auto">
                                      <button
                                        type="button"
                                        className="btn form-btn"
                                        
                                        onClick={KYCFunc}>
                                        Next
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div className="tab-pane fade" id="step3">
                                <form className="form-3">
                                  <div className="form-row row my-3">
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="CurrentCompanyName"
                                        placeholder="Adhar Card number"
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="file"
                                        name="adhar"
                                        className="file-input"
                                        id="Designination"
                                        placeholder="Post/Designination"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row row my-3">
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="CurrentCompanyName"
                                        placeholder="PAN-Card number"
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="file"
                                        className="file-input"
                                        name="adhar"
                                        id="Designination"
                                        placeholder="Post/Designination"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row row my-3">
                                    <div className="form-group col-md-6">
                                      <label for="adhar"
                                        >Insert Your Photograph</label
                                      >
                                      <input
                                        type="file"
                                        className="file-input"
                                        name="adhar"
                                        id="Designination"
                                        placeholder="Post/Designination"
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <label for="adhar"
                                        >Last 3 month's Bank Statement
                                      </label>
                                      <input
                                        type="file"
                                        className="file-input"
                                        name="adhar"
                                        id="Designination"
                                        placeholder="Post/Designination"
                                      />
                                    </div>
                                  </div>
                                  
                                
                                  <div className="form-row my-3 row">
                                    <div className="form-group col-md-6">
                                    <input type="checkbox"  id="HaveLoan" name="HaveLoan" value="1" />
                                    <label for="vehicle1">already have a Loan</label><br />   
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputDob"
                                        placeholder="Total Work Expirience"
                                      />
                                    </div>
                                  </div>
                                  
                                  <div className="row justify-content-between my-3">
                                    <div className="col-auto">
                                      <button
                                        type="button"
                                        className="btn form-btn"
                                      
                                        onClick={ClickEmployeeDetails}
                                      >
                                        Previous
                                      </button>
                                    </div>
                                    <div className="col-auto">
                                      <button
                                        type="submit"
                                        className="btn form-btn"
                                        
                                      >
                                        Finish
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
  </>)
};

export default LoanForm;
