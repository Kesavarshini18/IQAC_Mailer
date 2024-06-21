// import React from "react";
import "../styles/teacherList.css";
import Image1 from "../assets/images.png";

const teachers = [
  {
    id: 1,
    image: Image1,
    name: "IQAC Team",
    mail: "Student welfare-reg",
    status: "Accepted",
    Time: "14:30 18/04/24",
  },
  {
    id: 2,
    image: Image1,
    name: "IQAC Team",
    mail: "Students Dress code-reg",
    status: "Accepted",
    Time: "3.55 24/04/24",
  },
  {
    id: 3,
    image: Image1,
    name: "IQAC Team",
    mail: "Approval of OD-reg",
    status: "Accepted",
    Time: "16:00 26/04/24",
  },
  {
    id: 4,
    image: Image1,
    name: "IQAC Team",
    mail: "Change in Lunch timings-reg",
    status: "Accepted",
    Time: "12:50 30/04/24",
  },
];

const Accepted = () => {
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
              <th>Time of Approval</th>
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

export default Accepted;
