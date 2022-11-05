import React, { useEffect, useState } from "react";
import "./AdminPage.scss";
import AdminCard from "../../Component/AdminCard/AdminCard";
import ModalDetails from "../../Component/ModalDetails/ModalDetails";
import { BsSearch } from "react-icons/bs";

const AdminPage = (props) => {
  const [reportSearch, setReportSearch] = useState("");
  useEffect(() => {
    props.setShowModal(false);
  }, []);

  return (
    <div className="AdminPage">
      <div className="searchAdmin">
        <BsSearch className="lupica"/>
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => setReportSearch(e.target.value)}
        ></input>
      </div>
      <div className="AdminCards">
        {props.fetchResults[2]
          .filter((e) => {
            if (reportSearch == "") {
              return e;
            } else if (
              e.candidateName
                .toLowerCase()
                .includes(reportSearch.toLowerCase()) ||
              e.companyName.toLowerCase().includes(reportSearch.toLowerCase())
            )
              return e;
          })
          .map((e) => {
            return (
              <AdminCard
                reload={props.reload}
                setReload={props.setReload}
                fetchResults={props.fetchResults}
                e={e}
                setShowModal={props.setShowModal}
                showModal={props.showModal}
                setPickedElement={props.setPickedElement}
              />
            );
          })}
      </div>

      {props.showModal && (
        <ModalDetails
          pickedElement={props.pickedElement}
          setShowModal={props.setShowModal}
          fetchResults={props.fetchResults}
        />
      )}
    </div>
  );
};

export default AdminPage;
