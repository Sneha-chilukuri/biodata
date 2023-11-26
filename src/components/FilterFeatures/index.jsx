import React from 'react'
import { useState } from 'react';
import { CiFilter,CiCirclePlus } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RxCaretSort } from "react-icons/rx";
import ModalPopup from '../../commonFeatures/ModalPopup';
import CreateFormFields from '../CreateFormFields';

const formData = [
    {
        "id":1,
        "label":"Full Name",
        "placeHolder":"Enter Your Full Name",
        "type":"text",
        "validation":{
            "required":true,
            "errorMessage":"Enter Your FullName"
        }
    },
    {
        "id":2,
        "label":"Age",
        "placeHolder":"Enter Your Age",
        "type":"number",
        "validation":{
            "required":true,
            "isNumeric":true,
            "errorMessage":"Please enter a valid numeric age"
        }
    },
    {
        "id":3,
        "label":"Gender",
        "placeHolder":"Select Your Gender",
        "type":"text",
        "validation":{
            "required":true,
            "errorMessage":"Select Gender"
        }
    },
    {
        "id":4,
        "label":"Email ID",
        "placeHolder":"Enter Your Email ID",
        "type":"email",
        "validation":{
            "required":true,
            "errorMessage":"Please enter a valid numeric age"
        }
    },
    {
        "id":5,
        "label":"Mobile No",
        "placeHolder":"Enter Your Mobile No",
        "type":"tel",
        "validation":{
            "required":true,
            "isNumeric":true,
            "errorMessage":"Please enter a valid mobile age"
        }
    },
    {
        "id":6,
        "label":"Degree",
        "placeHolder":"Select Your Degree",
        "type":"text",
        "validation":{
            "required":true,
            "errorMessage":"Please Select any degree"
        }
    },
    {
        "id":7,
        "label":"Skills",
        "placeHolder":"Select Your Skills",
        "type":"text",
        "validation":{
            "required":true,
            "errorMessage":"Skills are required"
        }
    },
    {
        "id":8,
        "label":"Language",
        "placeHolder":"Select Your Language",
        "type":"text",
        "validation":{
            "required":true,
            "errorMessage":"Please Select language"
        }
    }

]

const FilterFeatures = () => {
    const [show, setShow] = useState(false);
    const [formValues, setFormValues] = useState({})
    const [formErrors, setFormErrors] = useState({})

    const handleClose = () =>{
        setShow(false)
        setFormErrors({})
        setFormValues({})
    }
    const handleModal = () => setShow(true);

    const handleChange = (e,field) =>{
      setFormValues({...formValues,[field.label]:e.target.value})
      validateField(e.target.value,field)
    }

    const validateField = (value,field) =>{
        if(field.validation.required && value.trim() === ''){
            setFormErrors({...formErrors,[field.label]:field.validation.errorMessage})
        }else{
            setFormErrors({...formErrors,[field.label]:''})
        }
    }

    const submitForm = (event) =>{
        event.preventDefault()
        let hasErrors = false;
        const newFormErrors = {};
        formData?.forEach((field) => {
          if (field.validation.required && !formValues[field.label]) {
            newFormErrors[field.label] = field.validation.errorMessage;
            hasErrors = true;
          }
        });

        if (hasErrors) {
            setFormErrors(newFormErrors);
          console.log("Form has errors, please fix them");
        } else {
            setFormErrors({})
          console.log("Form submitted successfully!", formValues);
        }

    }


    const createModalFields = () =>{
        return(
            <CreateFormFields handleChange={handleChange} submitForm={(event) =>submitForm(event, formData)} formValues={formValues} formErrors={formErrors}  formData={formData}/>
        )
    }

    
  return (
   
    <div className='filter-features-container'>
        <p className='dashboard-text'>Dashboard</p>
        <div className='filter-section-container'>
            <div className='create-feature-section'>
            <button className='filter-buttons' onClick={handleModal}>CREATE USER<CiCirclePlus className='filter-icons'/></button>
            {show && 
            <ModalPopup 
            show={show} 
            handleClose={handleClose} 
            modalBody={createModalFields()} 
            modalHeading='Create Form' 
            cancelBtn = "Cancel"
            addDetailsBtn = "Add Details"
            onSubmit={(event) => submitForm(event, formData)}
            />}
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