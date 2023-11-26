import React from 'react'
import { LuBellDot } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { LiaSearchSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='nav-items-container'>
        <div className='navbar-account-details'>
          <div className='name-container'>
            <h5>Akash</h5>
            <h5 className='admin-text'>(Admin)</h5>
          </div>
          <img src="/images/profile picture.png" alt="profile" className='profile-picture'/>
          <LuBellDot className='nav-icons'/>
          <FiSettings className='nav-icons'/>
        </div>
        <div className='search-bar-container'>
            <button className='create-user-button'> <CiCirclePlus className='plus-icon'/>CREATE USER</button>
            <div className='search-bar'>
                <input type="search" placeholder='Search Client, User, Form etc.' className='search-input'/>
                <LiaSearchSolid className='search-icon'/>
            </div>
        </div>
      </div>
      <div className='logo-container'>
        <img src="/images/yourlogo.png" alt="logo" className='logo' />
      </div>
    </div>
  )
}

export default Navbar