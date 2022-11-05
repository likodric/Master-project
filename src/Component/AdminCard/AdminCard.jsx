import React, { useEffect } from "react";
import "./AdminCard.scss";
import moment from "moment";
import { BsEye } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const AdminCard = (props) => {
  return (
    <div className="ReportCard">
      <div className="name">{props.e.companyName}</div>
      <div className="name">{props.e.candidateName}</div>
      <div className="date">
        {moment(props.e.interviewDate).format("DD-MMM-YYYY")}
      </div>
      <div className="status">{props.e.status}</div>
      <div className="button">
        <button
          onClick={() => {
            props.setPickedElement(props.e);
            props.setShowModal(true);
          }}
        >
          <BsEye />
        </button>
        <button
          onClick={() => {
            fetch(`http://localhost:3333/api/reports/${props.e.id}`, {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              // body: JSON.stringify(props.e),
            }).then((res) => {
              console.log(res);
              // console.log(token);
              props.setReload(!props.reload);
            });
          }}
        >
          <GrClose />
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
