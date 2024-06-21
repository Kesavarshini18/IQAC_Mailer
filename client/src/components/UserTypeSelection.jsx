// import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const UserTypeSelection = ({ onUserTypeSelect }) => {
  // const [selectedUserType, setSelectedUserType] = useState("");
  const navigate = useNavigate();

  const handleUserTypeSelect = (userType) => {
    // setSelectedUserType(userType);
    onUserTypeSelect(userType);
    // Navigate to the login page based on the selected user type
    navigate("/login");
  };

  return (
    <div className="login--container">
      <div className="login">
        <h2>Select User Type</h2>
        <button
          className="form-control login-button"
          onClick={() => handleUserTypeSelect("user")}
        >
          User
        </button>
        <button
          className="form-control login-button"
          onClick={() => handleUserTypeSelect("admin")}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

UserTypeSelection.propTypes = {
  onUserTypeSelect: PropTypes.func.isRequired,
};

export default UserTypeSelection;
