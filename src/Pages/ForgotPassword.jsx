import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userStatus, setUserStatus] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: userEmail,
    };
    await axios
      .post("https://login-authentication-backend-1.onrender.com/api/user/forgot_password", payload)
      .then((res) => {
        console.log(res.data.response);
        setUserStatus(true);
        navigate("/email_sent");
      })
      .catch((err) => {
        console.log(err)
        setUserStatus(true);
        setTimeout(() => {
          setUserEmail('');
        }, 5000);
      });
  };
  return (
    <div className="forgotPage">
      <div className="blackTint"></div>
      <div className="forgotContent">
        <div className="loginTint"></div>
        <h1 className="forgotTitle">Update password</h1>
        <p className="forgotDescription">
          We will send you an email with instructions on how to reset your
          password.
        </p>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="forgotForm"
        >
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            required
          />
          <p className="errorMessage">{userStatus ? "user not found" : ""}</p>
          <button type="submit">Email Me</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
