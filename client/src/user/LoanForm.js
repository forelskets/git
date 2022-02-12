import React,{useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';




const LoanForm = () => {
    const [pan , setPan] = useState('')
    const [adhaar , setAdhaar] = useState('')
    const [bankStmt , setBankStmt] = useState('')
    const [photo , setPhoto] = useState('')
    const [employeeProfile , setEmployeeProfile] = useState({
      fname:"",
      lname:"",
      fathername:"",
      email: "",
      dob:"",
      mobile:"",
      address:"",
      address2:"",
      zip:"",
      companyName:'',
      designation:"",
      currentCompanyExperience:"",
      totalExperience:"",
      monthlyIncome:"",
      annualIncome:"",
     
    })
const options =[
  {value:"Delhi" , label: "Delhi"},
  {value:"UP" , label: "UP"},
  {value:"Bihar" , label: "Bihar"}
];
const [stateSelect , setStateSelect] = useState({})
const OptionHandler = (tat)=>{
    setStateSelect(tat)
    
}

const options1 =[
  {value:"Aligarh" , label: "Aligarh"},
  {value:"Agra" , label: "Agra"},
  {value:"MuradaBad" , label: "MuradaBad"}
];
const [citySelect , setCitySelect] = useState({})
const OptionHandler1 = (tat)=>{
   setCitySelect(tat)
    
}

    const EmployeeDatails = useRef(null);
    const BasicDetails = useRef(null);
    const KYCDetails = useRef(null);
    const [checkBoxStatus, setCheckBoxStatus] = useState(false);
    const changeBox =()=>{
      setCheckBoxStatus(!checkBoxStatus)
      

    }
    const ProfileChangeHandler=(e)=>{
       e.preventDefault();
       const {name , value} = e.target;
       setEmployeeProfile({
         ...employeeProfile,
         [name]: value
       })

    }
  const SubmitDetails = async()=>{
   const FirstName = employeeProfile.fname;
  const LastName = employeeProfile.lname;
  const FatherName = employeeProfile.fathername;
  const Email = employeeProfile.email;
  const DOB = employeeProfile.dob;
  const Mobile = employeeProfile.mobile;
  const CurrentAddress = employeeProfile.address;
  const CurrentAddress2 = employeeProfile.address2;
  const State = stateSelect.value;
  const City = citySelect.value; 
  const ZIP = employeeProfile.zip;
  const CompanyName = employeeProfile.companyName;
  const Designation = employeeProfile.designation;
  const CurrentCompanyExperience = employeeProfile.currentCompanyExperience;
  const TotalExperience = employeeProfile.totalExperience;
  const MonthlyIncome = employeeProfile.monthlyIncome;
  const AnnualIncome = employeeProfile.annualIncome;
  // const AdhaarNo = employeeProfile.adhaarNo;
  // const PanNo = employeeProfile.panNo;
  // const BankName = employeeProfile.bankName;
  // const AccountNo = employeeProfile.accountNo;
  // const IFSCcode = employeeProfile.IFSCcode;
  // const ActiveLoanAmount = employeeProfile.activeLoanAmount;
  // const EMI = employeeProfile.emi;

  if(!FirstName || !LastName || !FatherName || !Email || !Mobile || !DOB || !CurrentAddress || !CurrentAddress2 || !State || !City || !ZIP || !CompanyName || !Designation || !CurrentCompanyExperience || !TotalExperience || !MonthlyIncome || !AnnualIncome  ){
      window.alert("please fill all the field carefully")
  }
  else{
  
  const response = await fetch('/employmentDetails',{
      method: "POST",
      headers:{
        'Content-Type':"application/json"
      },
      body: JSON.stringify({FirstName, LastName, FatherName, Email, Mobile, DOB,CurrentAddress, CurrentAddress2 , State, City , ZIP , CompanyName , Designation, CurrentCompanyExperience ,TotalExperience , MonthlyIncome ,AnnualIncome })
      
    })
    const data = await response.json();
         // axios
    //      const formData = new FormData();
    //      formData('adhaarNo', AdhaarNo);
    //      formData('adhaar', adhaar);
    //      formData('panNo', PanNo);
    //      formData('pan', pan);
    //      formData('bankName', BankName);
    //      formData('accountNo', AccountNo);
    //      formData('IFSCcode', IFSCcode);
    //      formData('photo', photo);
    //      formData('bankStmt', bankStmt);
    //      formData('activeLoanAmount', ActiveLoanAmount);
    //      formData('emi', EMI);
    // try{
    //     const upload = await axios.post('http://localhost:5000/kycDetails', formData)
    //     }catch(err){
    //       throw err;
    //     }
    if(response.status === 400 ){
      window.alert(data)
    }
    else if(response.status === 200){
      window.alert(data)
    }
  }}
     const ClickEmployeeDetails =()=>{
           EmployeeDatails.current.click();
     }

    const BasicDetailsFunc = ()=>{
        BasicDetails.current.click();
    }
    const KYCFunc = () =>{
        KYCDetails.current.click();
    }
    // const AdhaarUpload=(e)=>{
    //    setAdhaar(e.target.files[0])
       
    // }
    // const PanUpload=(e)=>{
    //   setPan(e.target.files[0])
    
    // }
    // const PhotoUpload=(e)=>{
    //   setPhoto(e.target.files[0])
   
    // }
    // const BankStmtUpload=(e)=>{
    //   setBankStmt(e.target.files[0])
      
    // }

    const checkFunc=()=>{
      return(
      <>
      <div className="form-row my-3 row">
      <div className="form-group col-md-6">
      <input
          type="text"
          className="form-control"
          id="activeLoan"
          
          placeholder="Active Loan Amount"
        />
      </div>
      <div className="form-group col-md-6">
      <input
          type="text"
          className="form-control"
          id="emi"
          name="emi"
          
          placeholder="EMI per Month"
        />
      </div>
      </div>
      </>)}
      
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
                          <form action=""  id="registration">
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
                                <div className="form-1">
                                  <div className="form-row row my-3">
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="fname"
                                         name="fname"
                                         value={employeeProfile.fname}
                                         onChange={ProfileChangeHandler}
                                        placeholder=" First Name"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="lname"
                                        name="lname"
                                        value={employeeProfile.lname}
                                        onChange={ProfileChangeHandler}
                                        placeholder=" Last Name"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="fathername"
                                        name="fathername"
                                        value={employeeProfile.fathername}
                                        onChange={ProfileChangeHandler}
                                        placeholder="Fathers Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row my-3 row">
                                    <div className="form-group col-md-4">
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={employeeProfile.email}
                                        onChange={ProfileChangeHandler}
                                        placeholder="Email"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="date"
                                        className="form-control"
                                        id="dob"
                                        name="dob"
                                        value={employeeProfile.dob}
                                        onChange={ProfileChangeHandler}
                                        placeholder="Date Of Birth"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="mobile"
                                        name="mobile"
                                        value={employeeProfile.mobile}
                                        onChange={ProfileChangeHandler}
                                        placeholder="mobile Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group my-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="address"
                                      name="address"
                                      value={employeeProfile.address}
                                      onChange={ProfileChangeHandler}
                                      placeholder="1234 Main Street aligarh"
                                    />
                                  </div>
                                  <div className="form-group my-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="address2"
                                      name="address2"
                                      value={employeeProfile.address2}
                                      onChange={ProfileChangeHandler}
                                      placeholder="Apartment, studio, or floor"
                                    />
                                  </div>
                                  <div className="form-row my-3 row">
                                    <div className="form-group col-md-4">
                                      
                                      <Select
                                        placeholder="Selected State"
                                        id="state"
                                        name="state"
                                        onChange={OptionHandler}
                                        options={options}
                                        className="form-control"
                                      />
                                       
                                    </div>
                                    <div className="form-group col-md-4">
                                      
                                      <Select
                                        placeholder="Selected City"
                                        id="city"
                                        name="city"
                                        
                                        options={options1}
                                        onChange={OptionHandler1}
                                        className="form-control"
                                      />
                                       
                                    </div>
                                    <div className="form-group col-md-3">
                                      <label for="inputZip"> ZIP Code</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="zip"
                                        name="zip"
                                        value={employeeProfile.zip}
                                        onChange={ProfileChangeHandler}
                                      />
                                    </div>
                                  </div>
                                  <div className="row justify-content-between my-3">
                                    
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
                                </div>
                              </div>
                              <div className="tab-pane fade" id="step2">
                                <div className="form-2">
                                  <div className="form-row row my-3">
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Current company name"
                                        value={employeeProfile.companyName}
                                        onChange={ProfileChangeHandler}
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="designination"
                                        name="designation"
                                        placeholder="Post/Designination"
                                        value={employeeProfile.designation}
                                        onChange={ProfileChangeHandler}
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row my-3 row">
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="currentCompanyExperience"
                                        name="currentCompanyExperience"
                                        placeholder="Current Work Expirience"
                                        value={employeeProfile.currentCompanyExperience}
                                        onChange={ProfileChangeHandler}
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="totalExperience"
                                        name="totalExperience"
                                        placeholder="Total Work Expirience"
                                        value={employeeProfile.totalExperience}
                                        onChange={ProfileChangeHandler}
                                      />
                                    </div>
                                  </div>
                                  <div className="row form-row">
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="montlyIncome"
                                        name="monthlyIncome"
                                        placeholder="Monthly Income"
                                        value={employeeProfile.monthlyIncome}
                                        onChange={ProfileChangeHandler}
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="annualIncome"
                                        name="annualIncome"
                                        placeholder="Annual Income"
                                        value={employeeProfile.annualIncome}
                                        onChange={ProfileChangeHandler}
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
                                </div>
                              </div>
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
                                        
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="file"
                                        name="adhaar"
                                        className="file-input"
                                        id="adhaar"
                                        placeholder="Post/Designination"
                                        
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
                                        
                                        placeholder="PAN-Card number"
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <input
                                        type="file"
                                        className="file-input"
                                        name="pan"
                                        id="pan"
                                        
                                        
                                      />
                                    </div>
                                  </div>
                                  <div className="form-row row my-3">
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="BankName"
                                        
                                        placeholder="Bank Name"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="accountNo"
                                        name="accountNo"
                                        
                                        placeholder="Account number"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="IFSCcode"
                                        name="IFSCcode"
                                        
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
                                       
                                      />
                                    </div>
                                    <div className="form-group col-md-6">
                                      <label for="adhar">Last 3 month's Bank Statement</label>
                                      <input
                                        type="file"
                                        className="file-input"
                                        name="bankStmt"
                                        id="bankStmt"
                                        
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
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
  </>)
};

export default LoanForm;
