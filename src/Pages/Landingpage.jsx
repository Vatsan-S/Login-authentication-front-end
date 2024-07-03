import React from "react";
import { Link } from "react-router-dom";



const Landingpage = () => {
  return (
    <div className="homeComponent">
      <div className="blackTint"></div>
      <div className="homeContent">
        <h1 className="homeTitle">Thankyou for Testing</h1>
        <p className="homeDescription">This is just a Signup & Signin Project with forgot password functionality</p>
        <Link to="/login">
          <button className="registerButton">Get Started</button>
        </Link>
        
        
      </div>
    </div>
  );
};

export default Landingpage;
