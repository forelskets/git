import React from 'react'
import AdminDashBoard from './AdminDashBoard'
import AdminNavBar from './AdminNavBar'

import AdminSideBar from './AdminSideBar'
import './style.css'


const AdminMain = () => {
  return (
    <>
    <AdminSideBar/>
    <section class="homes-section">
    <AdminNavBar />
    {/* <AdminDashBoard /> */}
    </section>
    </>
  )
}

export default AdminMain