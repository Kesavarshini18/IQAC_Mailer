import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AdminMail = ({ fetchMails, mails }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchMails();
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch mails.");
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchMails]);

  const handleAction = async (id, action) => {
    try {
      const response = await axios.post(`/api/process-mail/${id}`, { action });
      if (response.data.success) {
        fetchMails(); // Refresh mail list after action
      } else {
        console.error("Failed to process mail:", response.data.error);
      }
    } catch (error) {
      console.error("Error processing mail:", error);
    }
  };

  if (loading) {
    return <p>Loading emails...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="admin-mail">
      <h2>Admin Mail</h2>
      {Array.isArray(mails) && mails.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>To</th>
              <th>Subject</th>
              <th>Body</th>
              <th>Attachment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mails.map((mail) => (
              <tr key={mail._id}>
                <td>{mail._id}</td>
                <td>{mail.to}</td>
                <td>{mail.subject}</td>
                <td>{mail.body}</td>
                <td>{mail.attachment ? mail.attachment.name : "-"}</td>
                <td>
                  <button onClick={() => handleAction(mail._id, "accept")}>
                    Accept
                  </button>
                  <button onClick={() => handleAction(mail._id, "deny")}>
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No emails found.</p>
      )}
    </div>
  );
};

AdminMail.propTypes = {
  mails: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      attachment: PropTypes.object,
    })
  ),
  fetchMails: PropTypes.func.isRequired,
};

export default AdminMail;
