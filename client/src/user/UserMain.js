import React ,{useEffect , useState} from 'react';
import {useHistory} from 'react-router-dom'
import './userStyle.css'
import ApplyLoan from './ApplyLoan';
import UserNavbar from './UserNavbar';

const UserMain = () => {
 const history = useHistory()
  const callUserMainPage = async(req,res)=>{
    try{
        const res = await fetch('http://localhost:5000/userMain', {
              method:"GET",
              headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
              },
              credentials:"include" 
        });

        const data = await res.json()
        console.log(res)
        if(res.status === 401){
          history.push("/")
        }
       
       }catch(err){
        console.log(err);
       
    }  
}


  callUserMainPage();



  return (
  <>
      <div className="home-section">
    <UserNavbar />
    <ApplyLoan />
    </div>
  </>
  )
};

export default UserMain;
