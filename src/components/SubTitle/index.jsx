import React, { useState, useContext } from "react";
import { Apidata } from "../../App";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import ModalDialog from "../common/ModalDialog";
import Notification from "../common/Notification";
import FormFields from "../FormFileds";

const formData = [
  {
    id: 1,
    label: "FirstName",
    placeHolder: "Enter Your First Name",
    name: "firstname",
    type: "text",
    validation: {
      required: true,
      errorMessage: "Please Enter First Name",
    },
  },
  {
    id: 2,
    label: "LastName",
    placeHolder: "Enter Your Last Name",
    name: "lastname",
    type: "text",
    validation: {
      required: true,
      errorMessage: "Please Enter Last Name",
    },
  },
  {
    id: 3,
    label: "MobileNo",
    placeHolder: "Enter Your Mobile No",
    name: "mobileNumber",
    type: "tel",
    validation: {
      required: true,
      errorMessage: "Please Enter Mobile Number",
    },
  },
  {
    id: 4,
    label: "EmailID",
    placeHolder: "Enter Your Email ID",
    name: "emailId",
    type: "email",
    validation: {
      required: true,
      errorMessage: "Please Enter Email ID",
    },
  },
  {
    id: 5,
    label: "ID",
    placeHolder: "EnterID",
    name: "id",
    type: "number",
    validation: {
      required: true,
      errorMessage: "Please Enter ID",
    },
  },
  {
    id: 6,
    label: "Company",
    placeHolder: "Enter Your Company",
    type: "text",
    name: "company",
    validation: {
      required: true,
      errorMessage: "Please Enter Company",
    },
  },
  {
    id: 7,
    label: "Password",
    placeHolder: "Enter Your Password",
    type: "password",
    name: "password",
    validation: {
      required: true,
      errorMessage: "Please Enter Password",
    },
  },
  {
    id: 8,
    label: "Type Of User",
    placeHolder: "Select User Type",
    name: "selectUserType",
    type: "text",
    validation: {
      required: true,
      errorMessage: "Please Enter Type Of User",
    },
  },
];
const SubTitle = () => {
  const apiData = useContext(Apidata);
  const [isOpen, setIsOpen] = useState(false);
  const [alert, showAlert] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({});

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
    setFormValues({})
    setFormErrors({})
  };
  const handleChange = (e, field) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [field.label]: value });
    validateField(field, value);
  };

  const validateField = (field, value) => {
    console.log(field, value);
    if (field.validation.required && value.trim() === "") {
      setFormErrors({
        ...formErrors,
        [field.label]: field.validation.errorMessage,
      });
    } else {
      setFormErrors({ ...formErrors, [field.label]: "" });
    }
  };
  const handleSubmit = (e, formData) => {
    e.preventDefault();
    let hasErrors = false;
    let accumulatedErrors = {};
    formData?.forEach((field) => {
      if (field.validation.required && !formValues[field.label]) {
        accumulatedErrors = {
          ...accumulatedErrors,
          [field.label]: field.validation.errorMessage,
        };
        hasErrors = true;
      }
    });
    setFormErrors({
      ...formErrors,
      ...accumulatedErrors,
    });
    if (hasErrors) {
      console.log("Form has errors, please fix them");
    } else {
      console.log("Form submitted successfully!", formValues);
      handleClose()
    }
  };
  const modalBody = () => {
    return (
      <FormFields
        handleChange={handleChange}
        handleAddDetailsBtn={(e) => handleSubmit(e, formData)}
        values={formValues}
        formErrors={formErrors}
        formData={formData}
      />
    );
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
          handlePrimaryBtn={(e) => handleSubmit(e, formData)}
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
