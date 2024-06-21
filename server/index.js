const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const EmailModel = require("./models/mail");
const mailRoutes = require("./routes/mailroutes");

const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const upload = multer();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.get("/getUsers", (req, res) => {
  EmployeeModel.find()
    .then((employees) => res.json(employees))
    .catch((err) => console.log(err));
});

app.get("/getSentEmails", async (req, res) => {
  try {
    const sentEmails = await EmailModel.find();
    res.json(sentEmails);
  } catch (error) {
    console.error("Error fetching sent emails:", error);
    res.status(500).json({ error: "Failed to fetch sent emails." });
  }
});

app.use("/send-email", upload.single("attachment"), mailRoutes);

app.post("/send-email", async (req, res) => {
  const { to, subject, body, attachment } = req.body;

  try {
    // Create a new Email instance
    const newEmail = new EmailModel({
      to,
      subject,
      body,
      attachment,
    });

    // Save the new email to MongoDB
    await newEmail.save();
    res.json("Email sent and saved successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json("Failed to send email.");
  }
});

app.post("/api/process-mail/:id", async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;

  try {
    const mail = await EmailModel.findById(id);
    if (!mail) {
      return res
        .status(404)
        .json({ success: false, message: "Mail not found" });
    }

    // Perform the action (accept/deny)
    mail.status = action;
    await mail.save();

    res.json({ success: true, message: `Mail ${action}ed successfully!` });
  } catch (error) {
    console.error("Error processing mail:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to process mail." });
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
