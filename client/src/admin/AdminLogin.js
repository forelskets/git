import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div>
        <section className="vh-100 login-form">
      <div className="container py-5 h-100 .login-container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card .login-card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://source.unsplash.com/random

                    "
                    alt="login form"
                    className="img-fluid"
                    style={{borderRadius: "1rem 0 0 1rem"}}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img src="images/projectLogo.png" />
                        <span className="h1 fw-bold mb-0">CreditIn</span>
                      </div>
                      <div className="d-flex align-items-center mb-3 pb-1"></div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{letterSpacing: "1px"}}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form2Example17"
                          >Email address</label
                        >
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form2Example27"
                          >Password</label
                        >
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn login-btn btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>

                      <NavLink className="small text-muted" to="#!">Forgot password?</NavLink>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default AdminLogin