import React from 'react';
import { NavLink ,Link } from 'react-router-dom';
import AdminDashBoard from './AdminDashBoard'; 

const AdminSideBar = () => {

 
  return (
    <>
    
         <div className="sidebar" >
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">CreditIn</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="index.html" className="active">
            <i className="fas fa-border-all"></i>
            <span className="links_name">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="application.html">
            <i className="fas fa-heart"></i>
            <span className="links_name">Applications </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <i className="fas fa-university"></i>
            <span className="links_name">Bank</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminServices">
            <i className="fas fa-user"></i>
            <span className="links_name">Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <i className="fas fa-user"></i>
            <span className="links_name">Profile</span>
          </NavLink>
        </li>

        <li className="log_out">
          <NavLink to="#">
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </NavLink>
        </li>
      </ul>
    </div>
    
    </>
  )
}

export default AdminSideBar