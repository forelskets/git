import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';
import AdminNavBar from './AdminNavBar';

const AdminBank = () => {
  return (
    <>
      <AdminSideBar />
      <section className="homes-section">
        <AdminNavBar />
        <div className="home-content">
          <ul className="nav nav-tabs" id="myTab">
            <li className="nav-item">
              <Link to="#home" className="nav-link active" data-bs-toggle="tab">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#profile" className="nav-link" data-bs-toggle="tab">
                ADD
              </Link>
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
                            <th>Notes</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" className="scope">
                              1
                            </th>
                            <td></td>
                            <td></td>

                            <td>
                              <sectionsection>
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
                              </sectionsection>
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
                <form>
                  <div className="row my-4">
                    <div className="col-md-4">
                      <label htmlFor="bankName">Bank Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="bankName"
                        id="bankName"
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="note">Note</label>

                      <input
                        type="text"
                        className="form-control"
                        name="note"
                        id="note"
                      />
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
      </section>
    </>
  );
};

export default AdminBank;
