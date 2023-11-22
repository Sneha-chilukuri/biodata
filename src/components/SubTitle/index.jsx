import React, { useState, useContext } from "react";
import { Apidata } from "../../App";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import ModalDialog from "../common/ModalDialog";
import Notification from "../common/Notification";
import FormFields from "../FormFileds";

const SubTitle = () => {
  const apiData = useContext(Apidata);
  const [isOpen, setIsOpen] = useState(false);
  const [alert, showAlert] = useState(false);
  const handleDownload = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      Object.keys(apiData.data.data[0]).join(",") +
      "\n" +
      apiData.data.data.map((row) => Object.values(row).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "table_data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showAlert(true);
    setTimeout(() => {
      showAlert(false);
    }, 3000);
  };
  const handleModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const modalBody = () => {
    return <FormFields />;
  };
  return (
    <>
      {alert && (
        <Notification alert={alert} data="Your File Has Been Downloaded" />
      )}
      <div className="sub-title">
        <span className="dashboard-title">Dashboard</span>
        <div className="sub-titles">
          <div className="create-form-download">
            <div className="create-form">
              <button
                type="button"
                className="create-btn"
                onClick={handleModal}
              >
                CREATE FORM
              </button>
              <CiCirclePlus className="plus-icon" />
            </div>
            <div>
              <div className="download-data">
                <button
                  type="button"
                  className="download-btn"
                  onClick={handleDownload}
                >
                  DOWNLOAD
                </button>
                <MdOutlineFileDownload className="download-icon" />
              </div>
            </div>
          </div>
          <div className="filters">
            <p>Filters</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <ModalDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleSecondary={handleClose}
          modalHeading="Create User"
          modalBody={modalBody()}
          modalSize="lg"
          className="subTitle"
          primaryButton="Add Details"
          secondaryButton="Cancel"
          type="createForm"
        />
      )}
    </>
  );
};
export default SubTitle;
