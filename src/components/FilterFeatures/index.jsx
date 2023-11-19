import React from 'react'
import { CiCirclePlus,CiFilter } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RxCaretSort } from "react-icons/rx";


const FilterFeatures = () => {
  return (
    <div className='filter-features-container'>
        <p className='dashboard-text'>Dashboard</p>
        <div className='filter-section-container'>
            <div className='create-feature-section'>
                <button className='filter-buttons'>CREATE FORM <CiCirclePlus className='filter-icons'/></button>
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