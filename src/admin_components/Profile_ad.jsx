import { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css";
import userImage from "../assets/images.png";
import axios from "axios";

const Profile_ad = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Get the authentication token from localStorage
        if (!token) {
          // Handle case where token is missing
          console.error("Authentication token not found.");
          return;
        }
        const response = await axios.get("http://localhost:3001/getUsers", {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token with the request
          },
        });
        if (response.data) {
          setUserData(response.data); // Set the user data in state
        } else {
          // Handle case where user data is missing or not found
          console.error("User data not found.");
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="" />
          <h3 className="username">{userData.name}</h3>
          <span className="email">{userData.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile_ad;

// import React from "react";
// import ProfileHeader from "./ProfileHeader";
// import "../styles/profile.css";
// import userImage from "../assets/images.png";
// import { BiBook } from "react-icons/bi";

// const courses = [
//   {
//     title: "IQAC TEAM",
//     duration: "Head",
//     icon: <BiBook />,
//   },
// ];

// const Profile = () => {
//   return (
//     <div className="profile">
//       <ProfileHeader />
//       <div className="user--profile">
//         <div className="user--detail">
//           <img src={userImage} alt="" />
//           <h3 className="username">Keshhh</h3>
//           <span className="profession">Asst. Proffessor</span>
//         </div>
//         <div className="user-courses">
//           {courses.map((course) => (
//             <div className="course" key="course.title">
//               <div className="course-detail">
//                 <div className="course-cover">{course.icon}</div>
//                 <div className="course-name">
//                   <h5 className="title">{course.title}</h5>
//                   <span className="duration">{course.duration}</span>
//                 </div>
//               </div>
//               <div className="action">:</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
