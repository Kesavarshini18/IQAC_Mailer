import { BiTask, BiSolidReport, BiMessage } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// import React from "react";

const courses = [
  {
    title: "Accepted mails",
    icon: <BiTask />,
    path: "/accepted",
  },
  {
    title: "Denied mails",
    icon: <BiSolidReport />,
    path: "/denied",
  },
  {
    title: "Mail Generate",
    icon: <BiMessage />,
    path: "/mail",
  },
];

const Card = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };
  return (
    <div className="card--container">
      {courses.map((item, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleCardClick(item.path)}
        >
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
