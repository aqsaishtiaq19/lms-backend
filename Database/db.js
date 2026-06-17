const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.pluralize(null);

const connectDB = async () => {
  await mongoose.connect(
    "mongodb://aqsaishtiaq19_db_user:Zombie1919@ac-wa4atm1-shard-00-00.iuqnom3.mongodb.net:27017,ac-wa4atm1-shard-00-01.iuqnom3.mongodb.net:27017,ac-wa4atm1-shard-00-02.iuqnom3.mongodb.net:27017/LMS-backend?ssl=true&replicaSet=atlas-8ef1bz-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log(' Database Connected!'))
  .catch((error) => {
    console.log("DB Error: " + error);
  });
};

module.exports = connectDB;