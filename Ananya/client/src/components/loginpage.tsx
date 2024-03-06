
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import React from "react";

const LoginComponent = () => {
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
      try {
        const { data } = await axios.post("http://localhost:8080/login", {
        username,
        password,
        });
        console.log(data);
        if (data === "") {
        toast.error("Invalid username or password");
        } else {
        localStorage.setItem("ID", data.id);
        localStorage.setItem("username", data.name);
        navigate("/");
        }
      } catch (error) {
        if (error.response && error.response.status === 403) {
        toast.error("Please Register first");
        } else {
        toast.error("An error occurred");
        }
      }
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
          <div className="row g-0" style={{height:"400px"}}>
            <div className="col-md-6 col-lg-5 d-none d-md-block" style={{height:"100%"}}>
              <img
                src="https://media.istockphoto.com/id/530568719/photo/passenger-airplane-taking-off-at-sunset.jpg?s=612x612&w=0&k=20&c=XkAgyOR8kkY7kgfx2TtuXAilzWkJodleFDQbj_GEBXA="
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem", height: "100%"}}
              />
            </div>
            <div className="col-md-4  col-lg-7 gx-4 d-flex align-items-center" >
              <div className="card-body text-black" style={{height:"100%"}} >
                <form>
                  <div className="d-flex align-items-center mb-3 "  >
                    {/* <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    /> */}
                    <span className="h1 fw-bold mb-0" style={{color:"#89CFF0"}}>LOGIN</span>
                  </div>
                  <h5
                    className="fw-normal mb-1 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div className="form-outline mb-1">
                    <input
                      type="text"
                      id="form2Example17"
                      className="form-control"
                      onChange={(e) => setValues({...values, name: e.target.value})}
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      User Name
                    </label>
                  </div>
                  <div className="form-outline mb-1">
                    <input
                      type="password"
                      id="form2Example27"
                      className="form-control "
                      onChange={(e) => setValues({...values, pass: e.target.value})}
                    />
                    <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-3">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button" onClick={(e) => handleSubmit(e)}
                    >
                      Login 
                    </button>
                  </div>
                  <p className="mb-1 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a href="/register" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>
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

export default LoginComponent
