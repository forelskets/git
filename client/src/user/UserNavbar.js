import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './userStyle.css'

     

const UserNavbar = () => {
  const history = useHistory()
  const [profile , setProfile] = useState({});
  const profileFunc = async ()=>{
    const response = await fetch('/profile',{
         method:"GET",
         headers:{
           Accept: "application/josn",
           "Content-Type" : "application/json" 
         },
         credentials:"include"
    })
    const data = await response.json();
    setProfile(data);
    
  }


 useEffect(()=>{ 
  profileFunc();
 })

 const logOutFunc = async (req, res)=>{
  const response = await fetch('/userLogout',{
    method: "GET",
    headers:{
      Accept: "applicaton/json",
      "Content-Type":"application/json"
    },
    credential: "include"
  })
  if(response.status === 200){
    history.push('/');
  }
  
}


  return (
  <div>
      <div className="home-section">
      <nav>
      <div class="logo-container">
            <img
            src="images/credit-n-logo.svg"
           
            className="d-inline-block align-top"
            alt=""
          />
          </div>
        <div class="search-box">
          <input type="text" placeholder="Search..." />
          <i class="bx bx-search"></i>
        </div>
        <div class="dropdown">
          <div class="profile-details">
            <img src="images/profile.jpg" alt="" />

            <span class="admin_name" style={{textTransform:'capitalize'}}>{profile.Name}</span>
            <button
              class="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bx bx-chevron-down"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="dropdown-item" href="#">
                <i class="fas fa-sign-in-alt"></i> <span>action</span>
              </li>
              <li class="dropdown-item" href="#" onClick={logOutFunc}> <i class="fas fa-sign-in-alt"></i> <span>Logout</span></li>
              <li class="dropdown-item" href="#">
                <i class="fas fa-sign-in-alt"></i> <span>ID</span>
              </li>
              <li class="dropdown-item" href="#">
                <i class="fas fa-sign-in-alt"></i> <span> Reg </span>
              </li>
              <li class="dropdown-item" href="#">
                <i class="fas fa-sign-in-alt"></i> <span>action</span>
              </li>
            </div>
          </div>
        </div>
      </nav>
      
      </div>
  </div>);
};

export default UserNavbar;
