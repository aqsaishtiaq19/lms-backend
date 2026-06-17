const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" Database Connected!");
  }
   catch (error) {
    console.error("REGISTER ERROR:", error) 
    res.status(500).json({ message: error.message }) 
}
};

module.exports = connectDB;