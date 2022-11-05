import React from "react";
import "./ReportCompany.scss";
const ReportCompany = (props) => {
  return (
    <div
      className="reportcompany"
      onClick={() => props.setSelectedCompany(props.e)}
    >
      {props.e.name}
    </div>
  );
};

export default ReportCompany;
