import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Profile from "./components/Profile";
import Mail from "./pages/Mail";
import Accepted from "./pages/Accepted";
import Denied from "./pages/Denied";
import Help from "./pages/Help";
import Signup from "./components/Signup";
import Login from "./components/Login";
// Admin components
import Content_ad from "./admin_components/Content_ad";
import ProfileHead_ad from "./admin_components/ProfileHead_ad";
import AdminMail from "./pages-ad/AdminMail";
import Sidebar_ad from "./admin_components/Sidebar_ad";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [mails, setMails] = useState([]);

  const fetchMails = async () => {
    try {
      const response = await axios.get("/getSentEmails");
      if (Array.isArray(response.data)) {
        setMails(response.data);
      } else {
        console.error("Fetched data is not an array:", response.data);
        setMails([]);
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
      setMails([]);
    }
  };

  useEffect(() => {
    fetchMails();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
      if (token === "admin-token") {
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <Router>
      <div className="Register-login">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/login"
            element={
              <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
            }
          />
        </Routes>
      </div>
      {isLoggedIn && (
        <div className="dashboard">
          {isAdmin ? <Sidebar_ad /> : <Sidebar />}
          <div className="dashboard--content">
            <Routes>
              {!isAdmin && (
                <>
                  <Route path="/dashboard" element={<Content />} />
                  <Route path="/mail" element={<Mail />} />
                  <Route path="/Accepted" element={<Accepted />} />
                  <Route path="/Denied" element={<Denied />} />
                  <Route path="/Help" element={<Help />} />
                </>
              )}
              {isAdmin && (
                <>
                  <Route path="/admin-dashboard" element={<Content_ad />} />
                  <Route path="/ProfileHead_ad" element={<ProfileHead_ad />} />
                  <Route
                    path="/adminMail"
                    element={
                      <AdminMail mails={mails} fetchMails={fetchMails} />
                    }
                  />
                </>
              )}
            </Routes>
            <Profile />
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
