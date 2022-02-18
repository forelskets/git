import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import AdminSideBar from './AdminSideBar';

const AdminApplication = () => {
  return (
    <>
      <AdminSideBar />
      <section class="homes-section">
        <AdminNavBar />
        <div className="home-content">
          <div className="table-box">
            <div className="recent-table box">
              <span className="title ">User Data</span>
              <section className="ftco-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-wrap">
                        <table className="table">
                          <thead className="thead-primary">
                            <tr>
                              <th>SNo</th>
                              <th>Name</th>
                              <th>Mobile No</th>
                              <th>ApplicationNo</th>
                              <th>Aadhar No</th>
                              <th>Pan No</th>
                              <th>Amount</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="scope">
                                .com
                              </th>
                              <td>1 Year</td>
                              <td>$70.00</td>
                              <td>$5.00</td>
                              <td>$5.00</td>
                              <td>$70.00</td>
                              <td>$5.00</td>
                              <td>$5.00</td>
                              <td>fdsdfd</td>
                              <td>
                                <NavLink to="#" className="btn btn-primary">
                                  Sign Up
                                </NavLink>
                                <NavLink to="#" className="btn btn-secondary">
                                  {' '}
                                  log in
                                </NavLink>
                                <NavLink to="#" className="btn btn-danger">
                                  Credit Up
                                </NavLink>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminApplication;
