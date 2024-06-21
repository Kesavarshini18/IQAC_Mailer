import { BiMailSend, BiPaperclip } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import "../styles/mail.css";

const Mail = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const templates = [
    {
      id: 1,
      name: "Club Activity",
      body: "Description: In this workshop, experienced photographers will share tips and techniques for capturing stunning images in low-light conditions. You'll learn about camera settings, composition, and lighting tricks to elevate your night and evening photography.",
    },
    { id: 2, name: "Meeting", body: "Regarding our meeting..." },
    { id: 3, name: "Follow Up", body: "Just following up..." },
  ];

  const handleTemplateSelect = (index) => {
    setCurrentIndex(index);
    setBody(templates[index].body);
  };

  const handleSend = async () => {
    if (!to || !subject || !body) {
      setError("Please fill in all required fields.");
      return;
    }
    // const newMail = {
    //   to,
    //   subject,
    //   body,
    //   attachment,
    // };

    try {
      const formData = new FormData();
      formData.append("to", to);
      formData.append("subject", subject);
      formData.append("body", body);
      if (attachment) {
        formData.append("attachment", attachment);
      }

      const response = await axios.post(
        "http://localhost:3001/send-email",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setSuccessMessage("Email sent successfully!");
      } else {
        setError(response.data.error || "Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Failed to send email. Please try again.");
    } finally {
      setTo("");
      setSubject("");
      setBody("");
      setAttachment(null);
    }
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  const clearForm = () => {
    setTo("");
    setSubject("");
    setBody("");
    setAttachment(null);
    setError("");
    setSuccessMessage("");
  };

  return (
    <div className="mail-input">
      <div className="input-group">
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div className="error-message">{error}</div>
      <div className="success-message">{successMessage}</div>
      <div className="input-group">
        <label htmlFor="attachment">Attachment:</label>
        <input type="file" id="attachment" onChange={handleAttachmentChange} />
        <BiPaperclip />
        {attachment && <span>{attachment.name}</span>}
      </div>
      <div className="template-group">
        <h4>Templates:</h4>
        <div className="templates">
          {templates.map((template, index) => (
            <div key={template.id} className="template-card">
              <button
                key={template.id}
                onClick={() => handleTemplateSelect(index)}
                className={currentIndex === index ? "active" : ""}
              >
                {template.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="button-group">
        <button onClick={handleSend}>
          <BiMailSend /> Send
        </button>
        <button onClick={clearForm}>Clear</button>
      </div>
    </div>
  );
};

export default Mail;
