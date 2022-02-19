import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';
import AdminNavBar from './AdminNavBar';
import { BankDetailsForm } from '../components/AddYourBankDetailsForm'
import { service } from '../_services/Admin.services'
import toastr from 'toastr';
const AdminServices = () => {
  const [note, setNote] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [data, setData] = useState([]);

  const SubmitForms = async (e) => {
    e.preventDefault();

    const response = await fetch('/serviceAdd', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ note, serviceName }),
    });

    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      window.alert(data);
    } else if (response.status === 400) {
      window.alert(data);
    }
  };

  const callEffect = async () => {
    const response = await fetch('/serviceAdd', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    callEffect();
  }, []);


  const saveService = async (obj, callback) => {
    let res = await service(obj)
    if (res.status === 1) {
      if (callback) { callback() }
      var a = document.createElement('a');
      a.href = "#home";
      a.click()
      document.body.appendChild(a);
      toastr.success("Service created!")
    } else {
      if (res?.message)
        toastr.success(res.message)
    }
  }

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
                            <th>Bank Services</th>
                            <th>Notes</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((Element, ind) => {
                            return (
                              <>
                                <tr>
                                  <th scope="row" className="scope">
                                    {ind + 1}
                                  </th>
                                  <td>{Element.ServiceName}</td>
                                  <td>{Element.Note}</td>

                                  <td>
                                    <sectionsection>
                                      {' '}
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
                                    </sectionsection>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BankDetailsForm callApi={saveService}></BankDetailsForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminServices;
