// import React from "react";
import { Link } from "react-router-dom";

import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from "react-icons/bi";
import "../styles/sidebar.css";

const Sidebar_ad = () => {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>IQAC MAILER</h2>
      </div>
      <div className="menu--list">
        <Link to="/admin-dashboard" className="item active">
          <BiHome className="icon" />
          Dashboard
        </Link>
        <Link to="/Accepted" className="item">
          <BiTask className="icon" />
          Accepted
        </Link>
        <Link to="/Denied" className="item">
          <BiSolidReport className="icon" />
          Denied
        </Link>
        <Link to="/status" className="item">
          <BiStats className="icon" />
          Status
        </Link>
        <Link to="/adminMail" className="item">
          <BiMessage className="icon" />
          Mail
        </Link>
        <Link to="/help" className="item">
          <BiHelpCircle className="icon" />
          Help
        </Link>
      </div>
    </div>
  );
};

export default Sidebar_ad;
