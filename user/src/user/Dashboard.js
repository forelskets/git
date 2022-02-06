import React from 'react';
const Dashboard =()=> {
   return (
       <>
           <div className="container-scroller">
           <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pl-4 pt-3" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src="assets/images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span>
                
              </div>
              <div className="nav-profile-text d-flex flex-column pr-3">
                <span className="font-weight-medium mb-2">Henry Klein</span>
                <span className="font-weight-normal">$8,753.00</span>
              </div>
              <span className="badge badge-danger text-white ml-3 rounded">3</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="pages/icons/mdi.html">
              <i className="mdi mdi-contacts menu-icon"></i>
              <span className="menu-title">Icons</span>
            </a>
          </li>
       
         
          <li className="nav-item sidebar-actions">
            <div className="nav-link">
              <div className="mt-4">
                <div className="border-none">
                  <p className="text-black">Notification</p>
                </div>
                <ul className="mt-4 pl-0">
                  <li>Sign Out</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="container-fluid page-body-wrapper">
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close mdi mdi-close"></i>
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div className="sidebar-bg-options selected" id="sidebar-default-theme">
            <div className="img-ss rounded-circle bg-light border mr-3"></div> Default
          </div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme">
            <div className="img-ss rounded-circle bg-dark border mr-3"></div> Dark
          </div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles light"></div>
            <div className="tiles dark"></div>
          </div>
        </div>
        <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
          <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
            <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            <button className="navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
              <i className="mdi mdi-menu"></i>
            </button>
            <ul className="navbar-nav">
             
             
              <li className="nav-item nav-search border-0 ml-1 ml-md-3 ml-lg-5 d-none d-md-flex">
                <form className="nav-link form-inline mt-2 mt-md-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-magnify"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right ml-lg-auto">
            
              <li className="nav-item nav-profile dropdown border-0">
                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown">
                  <img className="nav-profile-img mr-2" alt="" src="assets/images/faces/face1.jpg" />
                  <span className="profile-name">Henry Klein</span>
                </a>
                <div className="dropdown-menu navbar-dropdown w-100" aria-labelledby="profileDropdown">
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-cached mr-2 text-success"></i> Activity Log </a>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-logout mr-2 text-primary"></i> Signout </a>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        <div className="main-panel">
          <div className="content-wrapper pb-0">
            <div className="page-header flex-wrap">
              <h3 className="mb-0"> Hi, welcome back!
              </h3>
             
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-12 stretch-card grid-margin">
                <div className="row">
                  <div className="col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                    <div className="card bg-warning">
                      <div className="card-body px-3 py-4">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="color-card">
                            <p className="mb-0 color-card-head">Sales</p>
                            <h2 className="text-white"> $8,753.<span className="h5">00</span>
                            </h2>
                          </div>
                          <i className="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"></i>
                        </div>
                        <h6 className="text-white">18.33% Since last month</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                    <div className="card bg-danger">
                      <div className="card-body px-3 py-4">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="color-card">
                            <p className="mb-0 color-card-head">Margin</p>
                            <h2 className="text-white"> $5,300.<span className="h5">00</span>
                            </h2>
                          </div>
                          <i className="card-icon-indicator mdi mdi-cube-outline bg-inverse-icon-danger"></i>
                        </div>
                        <h6 className="text-white">13.21% Since last month</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3">
                    <div className="card bg-primary">
                      <div className="card-body px-3 py-4">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="color-card">
                            <p className="mb-0 color-card-head">Orders</p>
                            <h2 className="text-white"> $1,753.<span className="h5">00</span>
                            </h2>
                          </div>
                          <i className="card-icon-indicator mdi mdi-briefcase-outline bg-inverse-icon-primary"></i>
                        </div>
                        <h6 className="text-white">67.98% Since last month</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-3 stretch-card pb-sm-3 pb-lg-0">
                    <div className="card bg-success">
                      <div className="card-body px-3 py-4">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="color-card">
                            <p className="mb-0 color-card-head">Affiliate</p>
                            <h2 className="text-white">2368</h2>
                          </div>
                          <i className="card-icon-indicator mdi mdi-account-circle bg-inverse-icon-success"></i>
                        </div>
                        <h6 className="text-white">20.32% Since last month</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
    
          </div>
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap dashboard template</a> from Bootstrapdash.com</span>
            </div>
          </footer>
        </div>
   
      </div>
     

          
          
          </div> </>
   )
}
export default Dashboard;