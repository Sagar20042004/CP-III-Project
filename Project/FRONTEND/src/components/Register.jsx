import React from 'react';
import "../styles/Register.css"; // Make sure to import the custom CSS
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-5">Please fill in the details to create your account!</p>

                    <div className="form-outline form-white mb-4">
                      <input type="text" id="firstName" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="firstName">First Name</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="text" id="lastName" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="lastName">Last Name</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="email" id="registerEmail" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="registerEmail">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="registerPassword" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="registerPassword">Password</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="confirmPassword" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

                  </div>

                  <div>
                    <p className="mb-0">Already have an account? 
                    <button onClick={()=>{navigate("/login")}}>Log in</button>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
