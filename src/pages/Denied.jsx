// import React from "react";
import "../styles/teacherList.css";
import Image1 from "../assets/images.png";

const teachers = [
  {
    id: 1,
    image: Image1,
    name: "Club Team",
    mail: "Student welfare-reg",
    status: "Denied",
    Time: "Periodical Test is Scheduled",
  },
  {
    id: 2,
    image: Image1,
    name: "Sports Team",
    mail: "Students Dress code-reg",
    status: "Denied",
    Time: "Placement Drive is  scheduled",
  },
  {
    id: 3,
    image: Image1,
    name: "COE Team",
    mail: "Approval of OD-reg",
    status: "Denied",
    Time: "Juspay Placement Drive is there",
  },
  {
    id: 4,
    image: Image1,
    name: "Club Team",
    mail: "Change in Lunch timings-reg",
    status: "Denied",
    Time: "Academic Lab slot is booked",
  },
];

const Denied = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teams</h2>
        <select>
          <option value="english">Accepted</option>
          <option value="mathematics">Denied</option>
        </select>
      </div>
      <div className="list--container">
        <table className="teacher--table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Reason for Denial</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>mail-header: {teacher.mail}</td>
                <td>{teacher.status}</td>
                <td>{teacher.Time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Denied;
