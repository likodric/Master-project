import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaHandSpock } from "react-icons/fa";
const Header = (props) => {
  return (
    <div className="Header">
      <h1>
        B1T
        <FaHandSpock />
      </h1>

      <div>
        {!(props.isLogin == "undefined" || props.isLogin == null) ? (
          <button
            className="logbtn"
            onClick={() => {
              props.setIsLogin(null);
              localStorage.clear();
            }}
          >
            Logout
          </button>
        ) : (
          <button className="logbtn" onClick={() => props.setShowLog(true)}>
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
