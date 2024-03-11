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
        sessionStorage.setItem("username", data.username);
        window.history.back();
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
 <div className="formcontainer">
  <input type="checkbox" id="flip" />
  <div className="cover">
    <div className="front">
      <img src="images/frontImg.jpg" alt="" />
      <div className="text">
        <span className="text-1">
          Every new friend is a <br /> new adventure
        </span>
        <span className="text-2">Let's get connected</span>
      </div>
    </div>
    <div className="back">
      {/*<img class="backImg" src="images/backImg.jpg" alt="">*/}
      <div className="text">
        <span className="text-1">
          Complete miles of journey <br /> with one step
        </span>
        <span className="text-2">Let's get started</span>
      </div>
    </div>
  </div>
  <div className="forms">
    <div className="form-content">
      <div className="login-form">
        <div className="title">Login</div>
        <form action="#">
          <div className="input-boxes">
            <div className="input-box">
              <i className="fas fa-envelope" />
              <input type="text" placeholder="Enter your email" required=""    onChange={(e) => setValues({...values, name: e.target.value})}/>
            </div>
            <div className="input-box">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Enter your password"
                required=""
                onChange={(e) => setValues({...values, pass: e.target.value})}
              />
            </div>
            <div className="text">
              <a href="#">Forgot password?</a>
            </div>
            <div className="button input-box" onClick={(e)=>handleSubmit(e)}>
              <input type="submit" defaultValue="Sumbit" />
            </div>
            <div className="text sign-up-text" onClick={()=>navigate('/signup')}>
              Don't have an account? <label htmlFor="flip">Sigup now</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<ToastContainer />
    </div>
  )
}
export default LoginComponent






{/* <div className="signup-form">
        <div className="title">Signup</div>
        <form action="#">
          <div className="input-boxes">
            <div className="input-box">
              <i className="fas fa-user" />
              <input type="text" placeholder="Enter your name" required="" />
            </div>
            <div className="input-box">
              <i className="fas fa-envelope" />
              <input type="text" placeholder="Enter your email" required="" />
            </div>
            <div className="input-box">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Enter your password"
                required=""
              />
            </div>
            <div className="button input-box">
              <input type="submit" defaultValue="Sumbit" />
            </div>
            <div className="text sign-up-text">
              Already have an account? <label htmlFor="flip">Login now</label>
            </div>
          </div>
        </form>
      </div> */}