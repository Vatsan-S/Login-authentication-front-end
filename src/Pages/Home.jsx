import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeComponent">
      <div className="blackTint"></div>
      <div className="homeContent">
        <h1 className="homeTitle">Unlimited movies, TV shows and more</h1>
        <p className="homeDescription">Watch anywhere. Cancel anytime.</p>
        <Link to="/register">
          <button className="registerButton">Get Started</button>
        </Link>
        <Link to="/login" className="homeLoginText">Already a member? login here</Link>
      </div>
    </div>
  );
};

export default Home;
