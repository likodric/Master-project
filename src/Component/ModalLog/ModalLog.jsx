import React, { useState } from "react";
import "./ModalLog.scss";
import { useHistory } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const ModalLog = (props) => {
  const [mail, setMail] = useState("");
  const [pass, setPassword] = useState("");
  const [timesTried, changeTimesTried] = useState(false);

  const close = () => {
    if (!(props.isLogin == "undefined" || props.isLogin == null)) {
      props.setShowLog(false);
    }
  };
  close();

  const history = useHistory();
  return (
    <div className="ModalContainer">
      <div className="ModalLogIn">
        <button
          className="ugasi"
          onClick={() => {
            props.setShowLog(false);
          }}
        >
          
          <GrClose />
        </button>
        <h3>
          <FaUserTie />
        </h3>
        <input
        className="input"
          type="text"
          placeholder="Username"
          onChange={(e) => setMail(e.target.value)}
        ></input>
        <input
        className="input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          onClick={() => {
            fetch("http://localhost:3333/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({ email: mail, password: pass }),
            })
              .then((data) => data.json())
              .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
                props.setIsLogin(localStorage.getItem("accessToken"));
                history.push("/adminPage");
              });
          }}
        >
          LogIn
        </button>
      </div>
    </div>
  );
};

export default ModalLog;
