import React from 'react'
import { useState } from 'react';
import { CiFilter,CiCirclePlus } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RxCaretSort } from "react-icons/rx";
import ModalPopup from '../ModalPopup';
import CreateFormFields from '../CreateFormFields';


const FilterFeatures = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleModal = () => setShow(true);

    const createModalFields = () =>{
        return(
            <CreateFormFields/>
        )
    }

  return (
    <div className='filter-features-container'>
        <p className='dashboard-text'>Dashboard</p>
        <div className='filter-section-container'>
            <div className='create-feature-section'>
            <button className='filter-buttons' onClick={handleModal}>CREATE FORM<CiCirclePlus className='filter-icons'/></button>
            {show && <ModalPopup show={show} handleClose={handleClose} modalHeading='Create Form' modalBody={createModalFields()} />}
                <button className='filter-buttons'>DOWNLOAD <FiDownload className='filter-icons'/></button>
            </div>
            <div className='filter-section'>
                <button className='filter-section-buttons'><IoIosArrowDown className='down-arrow'/>ALL<span className='filter-label'>Filter:<CiFilter className='filter-icons-2'/></span></button>
                <button  className='filter-section-buttons'><IoIosArrowDown className='down-arrow'/>A-Z <span className='filter-label'>Sort:<RxCaretSort className='filter-icons-2'/></span></button>
            </div>
        </div>
    </div>
  )
}

export default FilterFeatures