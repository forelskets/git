import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import AdminSideBar from './AdminSideBar';

const AdminApplication = () => {
  const [data, setData] = useState([]);

  const callEffect = async () => {
    const response = await fetch('/application', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data111 = await response.json();
    console.log(data111);
    setData(data111?.data?.applications);
  };

  useEffect(() => {
    callEffect();
  }, []);
  console.log('data', data);

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
                            {/* <tr>
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
                            </tr> */}
                            {Array.isArray(data) &&
                              data.map((d, i) => {
                                return (
                                  <tr>
                                    <th scope="row" className="scope">
                                      {i + 1}
                                    </th>
                                    <td>{d?.UserId?.Name}</td>
                                    <td>{d?.UserId?.Mobile}</td>
                                    <td>{d?.ApplicationNo}</td>
                                    <td>{d?.KycId?.AdhaarNo}</td>
                                    <td>{d?.KycId?.PanNo}</td>
                                    <td>{d?.Amount}</td>
                                    <td>{d?.createdAt}</td>
                                    <td>{d?.status}</td>
                                    <td>
                                      <NavLink
                                        to="#"
                                        className="btn btn-primary"
                                      >
                                        Sign Up
                                      </NavLink>
                                      <NavLink
                                        to="#"
                                        className="btn btn-secondary"
                                      >
                                        {' '}
                                        log in
                                      </NavLink>
                                      <NavLink
                                        to="#"
                                        className="btn btn-danger"
                                      >
                                        Credit Up
                                      </NavLink>
                                    </td>
                                  </tr>
                                );
                              })}
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
