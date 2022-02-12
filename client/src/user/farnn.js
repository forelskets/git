<div className="tab-pane fade" id="step3">
<div className="form-3">
  <div className="form-row row my-3">
    <div className="form-group col-md-6">
      <input
        type="text"
        className="form-control"
        id="adhaarNo"
        name="adhaarNo"
        placeholder="Adhar Card number"
        value={employeeProfile.adhaarNo}
        onChange={ProfileChangeHandler}
      />
    </div>
    <div className="form-group col-md-6">
      <input
        type="file"
        name="adhaar"
        className="file-input"
        id="adhaar"
        placeholder="Post/Designination"
        onChange={AdhaarUpload}
      />
    </div>
  </div>
  <div className="form-row row my-3">
    <div className="form-group col-md-6">
      <input
        type="text"
        className="form-control"
        id="panNo"
        name="panNo"
        value={employeeProfile.panNo}
        onChange={ProfileChangeHandler}
        placeholder="PAN-Card number"
      />
    </div>
    <div className="form-group col-md-6">
      <input
        type="file"
        className="file-input"
        name="pan"
        id="pan"
        onChange={PanUpload}
        
      />
    </div>
  </div>
  <div className="form-row row my-3">
    <div className="form-group col-md-4">
      <input
        type="text"
        className="form-control"
        id="BankName"
        value={employeeProfile.bankName}
        onChange={ProfileChangeHandler}
        placeholder="Bank Name"
      />
    </div>
    <div className="form-group col-md-4">
      <input
        type="text"
        className="form-control"
        id="accountNo"
        name="accountNo"
        value={employeeProfile.accountNo}
        onChange={ProfileChangeHandler}
        placeholder="Account number"
      />
    </div>
    <div className="form-group col-md-4">
      <input
        type="text"
        className="form-control"
        id="IFSCcode"
        name="IFSCcode"
        value={employeeProfile.IFSCcode}
        onChange={ProfileChangeHandler}
        placeholder="IFSC Code"
      />
    </div>                                    
  </div>
  <div className="form-row row my-3">
    <div className="form-group col-md-6">
      <label for="adhar">Insert Your Photograph</label>
      <input
        type="file"
        className="file-input"
        name="photo"
        id="photo"
        onChange={PhotoUpload}
      />
    </div>
    <div className="form-group col-md-6">
      <label for="adhar">Last 3 month's Bank Statement</label>
      <input
        type="file"
        className="file-input"
        name="bankStmt"
        id="bankStmt"
        onChange={BankStmtUpload}
      />
    </div>
  </div>
  

  <div className="form-row my-3 row">
    <div className="form-group col-md-6">
    <input type="checkbox"  id="HaveLoan" name="HaveLoan" value="1" onChange={changeBox}/>
    <label for="vehicle1">already have a Loan</label><br />   
    </div>
   
   
  </div>
  {(checkBoxStatus) ? checkFunc() : ""}
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
        type="button"
        className="btn form-btn"
        onClick={SubmitDetails}
      >
        Finish
      </button>
    </div>
  </div>
</div>
</div>



const checkFunc=()=>{
    return(
    <>
    <div className="form-row my-3 row">
    <div className="form-group col-md-6">
    <input
        type="text"
        className="form-control"
        id="activeLoan"
        value={employeeProfile.activeLoanAmount}
        onChange={ProfileChangeHandler}
        placeholder="Active Loan Amount"
      />
    </div>
    <div className="form-group col-md-6">
    <input
        type="text"
        className="form-control"
        id="emi"
        name="emi"
        value={employeeProfile.emi}
        onChange={ProfileChangeHandler}
        placeholder="EMI per Month"
      />
    </div>
    </div>
    </>
    , AdhaarNo , PanNo , BankName ,AccountNo, IFSCcode ,ActiveLoanAmount ,EMI  
    || !AdhaarNo || !adhaar  || !PanNo || !pan || !photo || !bankStmt || !BankName || !AccountNo || !IFSCcode || !ActiveLoanAmount || !EMI

    )}