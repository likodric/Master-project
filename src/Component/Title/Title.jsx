import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import "./Title.scss";

const Title = (props) => {
  return (
    <div className="Title">
      <h1>Interviews Reports</h1>
      <button className="titilebtn">
        <Link to="/">Candidate</Link>
      </button>
      {props.isLogin != "undefined" && props.isLogin != null && (
        <>
          <button className="titilebtn">
            <Link to="/adminPage">Reports</Link>
          </button>
          <button className="titilebtn">
            <Link to="/wizard">Create Reports</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Title;
