import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      "username": userName,
      "email": email,
      "password": password,
    };
    console.log(payload)
    await axios
      .post("https://login-authentication-backend-1.onrender.com/api/user/registeruser", payload)
      .then((res) => {
        setMsg(res.data.message);
        console.log(msg)
      })
      .catch((error) => {
        setMsg(error.data.message);
        console.log("error",msg)
      });
    navigate("/login");
  };
  return (
    <div className="regContainer">
      <div className="regContent">
        <h1 className="regTitle">Create a password to start your membership</h1>
        <p className="regDescription">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        <form onSubmit={handleSubmit} className="regForm">
          
          <input
            type="text"
            id="name"
            placeholder="Username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />

          
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
