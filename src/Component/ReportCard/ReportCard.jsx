import React, { useEffect, useState } from "react";
import "./ReportCard.scss";

const ReportCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    console.log(props);
    if (props.selectedCandidate.name === props.e.name) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [props.selectedCandidate]);

  return (
    <div
      className={`ReportCards ${isSelected ? "selected" : ""}`}
      onClick={() => props.setSelectedCandidate(props.e)}
    >
      <div className="slika">
        <img src={props.e.avatar} alt="pera"></img>
      </div>
      <div className="detalji">
        <h5>{props.e.name}</h5>
        <h6>{props.e.email}</h6>
      </div>
    </div>
  );
};

export default ReportCard;
