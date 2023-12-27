const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect= await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("MongoDB connected: ",connect.connection.host);
      } catch (error) {
        console.log(err);
        process.exit(1);
          }
}

module.exports = connectDB;