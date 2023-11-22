import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";

const NavBar = () => {
  return (
    <div className="navbar--container">
      <div className="logo-notifications">
        <div className="logo-details">
          <div className="admin-details">
            <span className="admin-name">Sneha</span>
            <span>(Admin)</span>
          </div>
          <img src="/images/logo.png" alt="logo" className="logo-image" />
          <IoIosNotificationsOutline className="notification-icon" />
          <CiSettings className="settings-icon" />
        </div>
        <div className="search-bar-icon">
          <input
            type="search"
            placeholder="Search Client, User, Form etc."
            className="search-box"
          />
          <VscSearch className="search-icon"/>
        </div>
      </div>
      <img src="/images/yourlogo.png" alt="your logo" className="your-logo" />
    </div>
  );
};
export default NavBar;
