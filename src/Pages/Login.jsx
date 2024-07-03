import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [data1, setData1] = useState(true)
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: passwd,
    };
    await axios
      .post("https://login-authentication-backend-1.onrender.com/api/user/loginuser", payload)
      .then((res) => {
        setData1(res.data)
        setMsg(res.message)
        navigate("/home");
      })
      .catch((err) => {
        setData1(err.data)
        setMsg(err.response.data.message)
        console.log(err)
      });
  };
  return (
    <div className="loginPage">
      <div className="blackTint"></div>
      <div className="loginContent">
        <div className="loginTint"></div>
        <h1 className="loginTitle">Sign In</h1>
        <form className="loginForm"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          
          <input
            type="Password"
            id="Passwd"
            placeholder="Password"
            value={passwd}
            onChange={(e) => {
              setPasswd(e.target.value);
            }}
          />
          <p className="errorMessage">{data1? "" : msg}</p>
          <button type="submit">Login</button>
          <Link to="/forgot_password" className="homeLoginText">
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
