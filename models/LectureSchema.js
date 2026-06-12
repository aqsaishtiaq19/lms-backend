const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
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
    enum: ["Sci", "CS", "English"],
    default: "Teacher"
  },
  assignlecture: {
    type: String,
    required: true
  }
});

const Lecture = mongoose.model("Lecture", lectureSchema);

module.exports = Lecture;