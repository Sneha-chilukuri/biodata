import React, { useContext, useState } from "react";
import { Apidata } from "../../App";
import { FiEdit2 } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { GoEyeClosed } from "react-icons/go";
import ModalDialog from "../common/ModalDialog";
import Notification from "../common/Notification";
import FormFields from "../FormFileds";

const FormTable = () => {
  const apiData = useContext(Apidata);
  const [filterData, setFilteredData] = useState(apiData.data);
  const [showAccountNumber, setAccountNumber] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  const [showNotification, setNotification] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // const [visibleFields, setVisibleFields] = useState({});

  // const  = (accountId) => {
  //   setVisibleFields(prevState => ({
  //     ...prevState,
  //     [accountId]: !prevState[accountId],
  //   }));
  // };
  const handleEyeIcon = (id) => {
    const accounts = filterData.filter((d) => d.id === id);
    if (accounts[0].id === id) {
      setAccountNumber(!showAccountNumber);
    }
  };
  const handleEditIcon = () => {
    setIsEdit(true);
  };
  const handleDeletePopup = (id) => {
    const accounts = apiData.data.filter((d) => d.id === id);
    setDeleteData(accounts);
    setIsModalOpen(true);
  };
  const handleClose = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
    setIsEdit(false);
  };

  const handleDeleteBtn = (deleteId) => {
    const accounts = apiData.data.filter((d) => d.id !== deleteId);
    setFilteredData(accounts);
    setIsModalOpen(false);
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };
  const ModalBody = () => {
    if (isModalOpen) {
      return (
        <>
          Are you sure you want to delete
          <strong>{` ${deleteData[0].fullname}`}</strong>'s account
        </>
      );
    } else {
      return <FormFields />;
    }
  };
  return (
    <>
      {showNotification && (
        <Notification data={`${deleteData[0].fullname} details are deleted`} />
      )}
      <div className="table-form">
        <table className="table-data">
          <thead className="table-heading">
            <tr>
              <th>Actions</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Qualification</th>
              <th>Date Of Birth</th>
              <th>Skills</th>
              <th>Languages</th>
            </tr>
          </thead>
          <tbody className="table-content">
            {filterData &&
              filterData?.map((value) => (
                <tr key={value.id} className="table-rows-content">
                  <td>
                    <button
                      onClick={() => handleEyeIcon(value.id)}
                      className="eye-icons"
                    >
                      {showAccountNumber ? (
                        <IoEyeOutline className="eye-icon" />
                      ) : (
                        <GoEyeClosed className="eye-icon" />
                      )}
                    </button>
                    <button type="button" onClick={() => handleEditIcon()}>
                      <FiEdit2 className="edit-icon" />
                    </button>
                    <AiOutlineDelete
                      className="delete-icon"
                      onClick={() => handleDeletePopup(value.id)}
                    />
                  </td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.gender}</td>
                  <td>{value.contact.email}</td>
                  <td>{value.contact.phone}</td>
                  <td>{value.education[0].degree}</td>
                  <td>{value.dateOfBirth}</td>
                  <td>{value.skills[0]}</td>
                  <td>{value.languages[0].name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {(isModalOpen || isEdit) && (
        <ModalDialog
          isOpen={isModalOpen || isEdit}
          setIsOpen={isModalOpen ? setIsModalOpen : setIsEdit}
          modalHeading={isModalOpen ? "Deleting Account ?" : "Edit Details"}
          modalBody={ModalBody()}
          handleSecondary={handleClose}
          modalSize="sm"
          handlePrimaryBtn={
            isModalOpen ? () => handleDeleteBtn(deleteData[0].id) : () => {}
          }
          primaryButton={isModalOpen ? "Delete" : "Save Changes"}
          secondaryButton="Cancel"
        />
      )}
    </>
  );
};
export default FormTable;
