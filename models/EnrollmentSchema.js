const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  subject: {
    type: String,
    enum: ["Sci", "CS", "English" ,"Math" , "History"],
    default: "Student"
  },
  IdNumber: {
    type: String,
    required: true
  }
});

const Enrollment = mongoose.model("Enrollment", EnrollmentSchema);

module.exports = Enrollment;