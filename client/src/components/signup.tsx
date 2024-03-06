import React, { useState } from 'react'

import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(
    {
      name: '',
      pass: ''
    }
  )

  // const show=()=> {
  //  console.log(values);
  // }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const username = values.name
    const password = values.pass

      if (handleValidate()) {
    
        const { status } = await axios.post("http://localhost:8080/users", {
            username,
            password,
        });
        console.log(status);
        if (status === 200) {
            // API call was successful
            alert('User registered successfully');
            navigate('/login');
        } else {
            // Handle error cases
            toast.error("Invalid username or password");
        }
        // if(data.status===true){
        //   localStorage.setItem('jwt',data.token)
        //   sessionStorage.setItem('chat-app-user', JSON.stringify(data.user));
        //   navigate('/');
        // }
      }
    }

      const toastOptions:ToastOptions = {
        theme: "dark",
        draggable: true,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
      };

      
      const handleValidate = () => {
        const { pass, name } = values;
        // console.log(password , username)
        if (pass === "" && name === "") {
          toast.warning("Please Fill this up to login");
          return false;
        }
        if (pass === "" || name === "") {
      
          if (pass === "")
            toast.warning("Please enter the password", toastOptions);
      
          if (name === "")
            toast.warning("Please enter the username", toastOptions);
      
          return false;
        }
        //  if (username.length < 4) {
        //   toast.error("Username must be atleast of 4 character long", toastOptions);
        //   return false;
        // } else if (password.length < 8) {
        //   toast.error("Password must be 8 character long", toastOptions);
        //   return false;
        // }
        return true;
      };
  return (
    <div>
 <section className="vh-100" style={{ backgroundColor: "#99918f" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0" >
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://media.istockphoto.com/id/530568719/photo/passenger-airplane-taking-off-at-sunset.jpg?s=612x612&w=0&k=20&c=XkAgyOR8kkY7kgfx2TtuXAilzWkJodleFDQbj_GEBXA="
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem", height: "100%"}}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">Register</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Register with Fly High to get started
                  </h5>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form2Example17"
                      className="form-control form-control-lg"
                      onChange={(e) => setValues({...values, name: e.target.value})}
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      User Name
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example27"
                      className="form-control form-control-lg"
                      onChange={(e) => setValues({...values, pass: e.target.value})}
                    />
                    <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button" onClick={(e) => handleSubmit(e)}
                    >
                      Sign Up 
                    </button>
                  </div>
                  <a href="#!" className="small text-muted">
                    Terms of use.
                  </a>
                
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<ToastContainer />
      
    </div>
  )
}

export default Register
