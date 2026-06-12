

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.pluralize(null)
// Connection of mongo db
const connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/LMS-DB')
    .then(() => console.log('Database Connected!'))
    .catch((error) => {
        console.log("DB Error" + error)
    })
}

module.exports = connectDB










