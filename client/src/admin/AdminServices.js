import React from 'react'
import {NavLink} from 'react-router-dom'


const AdminServices = () => {
  return (
    <>
    
   
    
   
       <div className="home-content">
        

        <ul className="nav nav-tabs" id="myTab">
          <li className="nav-item">
            <NavLink to="#home" className="nav-link active" data-bs-toggle="tab">Home</NavLink>
            
          </li>
          <li className="nav-item">
            <NavLink to="#profile" className="nav-link" data-bs-toggle="tab">Profile</NavLink>
          </li>
          <div className="color-row"></div>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="home">
            <div className="recent-table box table-box tab-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-wrap">
                    <table className="table">
                      <thead className="thead-primary">
                        <tr>
                          <th>Sr. No.</th>
                          <th>Bank Name</th>
                          <th>Services</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="scope">.com</th>
                          <td>1 Year</td>
                          <td>$70.00</td>

                          <td>
                            <NavLink to="#" className="btn btn-primary">Sign Up</NavLink>
                            <NavLink to="#" className="btn btn-secondary"> log in</NavLink>
                            <NavLink to="#" className="btn btn-danger">Credit Up</NavLink>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile">
            <div className="col-md-11 mx-auto">
              <span className="h2 mb-0">Add Your Bank Details</span>
              <form action="">
                <div className="row my-4">
                  <div className="col-md-4">
                    <label for="">Bank Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputState">Select Service</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label for="">Note</label>

                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="btn-div">
                  <button className="btn yellow-btn">Cancel</button>
                  <button className="btn form-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  
  )
}

export default AdminServices
   
  
   

     
    

    