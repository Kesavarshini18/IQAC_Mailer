// import React from "react";
import "../styles/teacherList.css";
import Image1 from "../assets/images.png";
const teams = [
  {
    id: 1,
    image: Image1,
    name: "IQAC Team",
    mail: "Student welfare-reg",
    status: "Initiated",
  },
  {
    id: 2,
    image: Image1,
    name: "IQAC Team",
    mail: "Students Dress code-reg",
    status: "Denied",
  },
  {
    id: 3,
    image: Image1,
    name: "IQAC Team",
    mail: "Approval of OD-reg",
    status: "Accepted",
  },
  {
    id: 4,
    image: Image1,
    name: "IQAC Team",
    mail: "Change in Lunch timings-reg",
    status: "Denied",
  },
  {
    id: 5,
    image: Image1,
    name: "IQAC Team",
    mail: "Availability of M-Team Members-reg",
    status: "Accepted",
  },
];
const Teams_ad = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teams</h2>
        <select>
          <option value="english">Accepted</option>
          <option value="mathematics">Denied</option>
          <option value="mathematics">Initiated</option>
        </select>
      </div>
      <div className="list--container">
        <table className="teacher--table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((teams) => (
              <tr key={teams.id}>
                <td>{teams.name}</td>
                <td>mail-header: {teams.mail}</td>
                <td>{teams.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams_ad;
