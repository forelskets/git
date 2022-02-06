
import { NavLink } from "react-router-dom";



const ApplyLoan=() =>{

  return (
    <>
    
      <div className="tabled">
     <hr/>
     {/* <div className="image-container set-full-height" >
	    
	    

		
		

	    
	 <div className="image-container set-full-height" style={{backgroundImage: `url(&quot;assets/img/wizard-book.jpg&quot)` , height: "auto"}}>
	    
	    <NavLink to="http://creative-tim.com">
	         <div className="logo-container">
	            <div className="logo">
	                <img src="assets/img/new_logo.png" />
	            </div>
	            <div className="brand">
	                Creative Tim
	            </div>
	        </div>
	    </NavLink>

		
		<NavLink to="http://demos.creative-tim.com/material-kit/index.html?ref=material-bootstrap-wizard" className="made-with-mk">
			<div className="brand">MK</div>
			<div className="made-with">Made with <strong>Material Kit</strong></div>
		</NavLink>

	
	    <div className="container">
	        <div className="row">
		        <div className="col-sm-8 col-sm-offset-2">
		           
		            <div className="wizard-container">
		                <div className="card wizard-card" data-color="red" id="wizard">
		                    <form action="" method="" novalidate="novalidate">
		               

		                    	<div className="wizard-header">
		                        	<h3 className="wizard-title">
		                        		Book a Room
		                        	</h3>
									<h5>This information will let us know more about you.</h5>
		                    	</div>
								<div className="wizard-navigation">
									<ul className="nav nav-pills">
			                            <li className="" style={{width: "33.3333%"}}><NavLink to="#details" data-toggle="tab" aria-expanded="false">Account</NavLink></li>
			                            <li className=""  style={{width: "33.3333%"}}><NavLink to="#captain" data-toggle="tab" aria-expanded="false">Room Type</NavLink></li>
			                            <li className="active"  style={{width: "33.3333%"}}><NavLink to="#description" data-toggle="tab" aria-expanded="true">Extra Details</NavLink></li>
			                        </ul>
								<div className="moving-tab" style={{width: "250px" , transform: "translate3d(508px, 0px, 0px)" , transition: "transform 0s ease 0s"}}>Extra Details</div></div>

		                        <div className="tab-content">
		                            <div className="tab-pane" id="details">
		                            	<div className="row">
			                            	<div className="col-sm-12">
			                                	<h4 className="info-text"> Let's start with the basic details.</h4>
			                            	</div>
		                                	<div className="col-sm-6">
												<div className="input-group">
													<span className="input-group-addon">
														<i className="material-icons">email</i>
													</span>
													<div className="form-group label-floating is-empty">
			                                          	<label className="control-label">Your Email</label>
			                                          	<input name="name" type="text" className="form-control" />
			                                        <span className="material-input"></span></div>
												</div>

												<div className="input-group">
													<span className="input-group-addon">
														<i className="material-icons">lock_outline</i>
													</span>
													<div className="form-group label-floating is-empty">
			                                          	<label className="control-label">Your Password</label>
			                                          	<input name="name2" type="password" className="form-control" />
			                                        <span className="material-input"></span></div>
												</div>

		                                	</div>
		                                	<div className="col-sm-6">
		                                    	<div className="form-group label-floating is-empty">
		                                        	<label className="control-label">Country</label>
	                                        		<select className="form-control">
														<option disabled="" selected=""></option>
	                                                	<option value="Afghanistan"> Afghanistan </option>
	                                                	<option value="Albania"> Albania </option>
	                                                	<option value="Algeria"> Algeria </option>
	                                                	<option value="American Samoa"> American Samoa </option>
	                                                	<option value="Andorra"> Andorra </option>
	                                                	<option value="Angola"> Angola </option>
	                                                	<option value="Anguilla"> Anguilla </option>
	                                                	<option value="Antarctica"> Antarctica </option>
	                                                	<option value="...">...</option>
		                                        	</select>
		                                    	<span className="material-input"></span></div>
												<div className="form-group label-floating is-empty">
		                                        	<label className="control-label">Daily Budget</label>
	                                        		<select className="form-control">
														<option disabled="" selected=""></option>
	                                                	<option value="Afghanistan"> &lt; $100 </option>
	                                                	<option value="Albania"> $100 - $499 </option>
	                                                	<option value="Algeria"> $499 - $999 </option>
	                                                	<option value="American Samoa"> $999+ </option>
		                                        	</select>
		                                    	<span className="material-input"></span></div>
		                                	</div>
		                            	</div>
		                            </div>
		                            <div className="tab-pane" id="captain">
		                                <h4 className="info-text">What type of room would you want? </h4>
		                                <div className="row">
		                                    <div className="col-sm-10 col-sm-offset-1">
		                                        <div className="col-sm-4">
		                                            <div className="choice" data-toggle="wizard-radio" rel="tooltip" title="" data-original-title="This is good if you travel alone.">
		                                                <input type="radio" name="job" value="Design" />
		                                                <div className="icon">
		                                                    <i className="material-icons">weekend</i>
		                                                </div>
		                                                <h6>Single</h6>
		                                            </div>
		                                        </div>
		                                        <div className="col-sm-4">
		                                            <div className="choice" data-toggle="wizard-radio" rel="tooltip" title="" data-original-title="Select this room if you're traveling with your family.">
		                                                <input type="radio" name="job" value="Code"/>
		                                                <div className="icon">
		                                                    <i className="material-icons">home</i>
		                                                </div>
		                                                <h6>Family</h6>
		                                            </div>
		                                        </div>
												<div className="col-sm-4">
		                                            <div className="choice" data-toggle="wizard-radio" rel="tooltip" title="" data-original-title="Select this option if you are coming with your team.">
		                                                <input type="radio" name="job" value="Code" />
		                                                <div className="icon">
		                                                    <i className="material-icons">business</i>
		                                                </div>
		                                                <h6>Business</h6>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="tab-pane active" id="description">
		                                <div className="row">
		                                    <h4 className="info-text"> Drop us a small description.</h4>
		                                    <div className="col-sm-6 col-sm-offset-1">
	                                    		<div className="form-group is-empty">
		                                            <label>Room description</label>
		                                            <textarea className="form-control" placeholder="" rows="6"></textarea>
		                                        <span className="material-input"></span></div>
		                                    </div>
		                                    <div className="col-sm-4">
		                                    	<div className="form-group">
		                                            <label className="control-label">Example</label>
		                                            <p className="description">"The room really nice name is recognized as being a really awesome room. We use it every sunday when we go fishing and we catch a lot. It has some kind of magic shield around it."</p>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
	                        	<div className="wizard-footer" />
	                            	<div className="pull-right">
	                                    <input type="button" className="btn btn-next btn-fill btn-danger btn-wd disabled" name="next" value="Next" style={{display: "none"}} />
	                                    <input type="button" className="btn btn-finish btn-fill btn-danger btn-wd" name="finish" value="Finish" style={{display: "inline-block"}} />
	                                </div>
	                                <div className="pull-left">
	                                    <input type="button" className="btn btn-previous btn-fill btn-default btn-wd" name="previous" value="Previous" />

										<div className="footer-checkbox" style={{opacity: 0,  visibility: "hidden" , position: "absolute"}}>
											<div className="col-sm-12">
											  <div className="checkbox">
												  <label>
													  <input type="checkbox" name="optionsCheckboxes" /><span className="checkbox-material"><span className="check"></span></span>
												  </label>
												  Subscribe to our newsletter
											  </div>
										  </div>
										</div>
	                                </div>
	                                <div className="clearfix"></div>
	                        	
		                    </form>
		                </div>
		            </div> 
		        </div>
	    	</div> 
		</div> 

	    <div className="footer">
	        <div className="container text-center">
	             Made with <i className="fa fa-heart heart"></i> by <NavLink to="http://www.creative-tim.com">Creative Tim</NavLink>. Free download <NavLink to="http://www.creative-tim.com/product/material-bootstrap-wizard">here.</NavLink>
	        </div>
	    </div>
	</div> 

	    <div className="footer">
	        <div className="container text-center">
	             Made with <i className="fa fa-heart heart"></i> by <NavLink to="http://www.creative-tim.com">Creative Tim</NavLink>. Free download <NavLink to="http://www.creative-tim.com/product/material-bootstrap-wizard">here.</NavLink>
	        </div>
	    </div> 
	</div> */}


<div className="container">
    <div className="row py-4">
      <div className="col">
        <div className="text-center">
          <h1>Enchanter</h1>
          <p className="lead">The definitive form wizard plugin for Bootstrap 5</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <form action="" method="post" id="registration">
          <nav>
            <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">
              <NavLink className="nav-link active" id="step1-tab" data-bs-toggle="tab" to="#step1">Step 1</NavLink>
              <NavLink className="nav-link" id="step2-tab" data-bs-toggle="tab" to="#step2">Step 2</NavLink>
              <NavLink className="nav-link" id="step3-tab" data-bs-toggle="tab" to="#step3">Step 3</NavLink>
            </div>
          </nav>
          <div className="tab-content py-4">
            <div className="tab-pane fade show active" id="step1">
              <h4>Personal data</h4>
              <div className="mb-3">
                <label htmlFor="field1">Required text field 1</label>
                <input type="text" name="field1" className="form-control" id="field1" required />
              </div>
              <div className="mb-3">
                <label htmlFor="field2">Required email field 2</label>
                <input type="email" name="field2" className="form-control" id="field2" required />
              </div>
              <div className="mb-3">
                <label htmlFor="field3">Optional field</label>
                <input type="text" name="field3" className="form-control" id="field3" />
              </div>
            </div>
            <div className="tab-pane fade" id="step2">
              <h4>Contact information</h4>
              <div className="mb-3">
                <label htmlFor="field4">Required field 1</label>
                <input type="text" name="field4" className="form-control" id="field4" required />
              </div>
              <div className="mb-3">
                <label htmlFor="field5">Optional field</label>
                <input type="text" name="field5" className="form-control" id="field5" />
              </div>
              <div className="mb-3">
                <label htmlFor="textarea1">Required field 2</label>
                <textarea name="textarea1" rows="5" className="form-control" id="textarea1" required></textarea>
              </div>
            </div>
            <div className="tab-pane fade" id="step3">
              <h4>Review your information</h4>
              <div className="mb-3">
                <label htmlFor="first_name">Required field 1</label>
                <input type="text" className="form-control-plaintext" value="Lorem ipsum dolor sit amet" />
              </div>
              <div className="mb-3">
                <label htmlFor="first_name">Optional field</label>
                <input type="text" className="form-control-plaintext" value="Lorem ipsum dolor sit amet" />
              </div>
              <div className="mb-3">
                <label htmlFor="first_name">Required field 2</label>
                <input type="text" className="form-control-plaintext" value="Lorem ipsum dolor sit amet" />
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-auto"><button type="button" className="btn btn-secondary" data-enchanter="previous">Previous</button></div>
            <div className="col-auto">
              <button type="button" className="btn btn-primary" data-enchanter="next">Next</button>
              <button type="submit" className="btn btn-primary" data-enchanter="finish">Finish</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>


      </div>
    </>
  );
}

export default ApplyLoan;
