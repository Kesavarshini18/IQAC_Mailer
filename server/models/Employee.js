const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const EmployeeModel = mongoose.model("employees", EmployeeSchema);

EmployeeModel.prototype.sendEmail = async function (
  to,
  subject,
  body,
  attachment
) {
  const newEmail = new EmailModel({
    from: this.email, // Assuming email is stored on the employee object
    to,
    subject,
    body,
    attachment,
    employeeId: this._id, // Use the employee's ID
  });

  try {
    await newEmail.save();
    console.log("Email sent from employee:", this.email);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = EmployeeModel;
