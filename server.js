const express = require('express');
const errorHandler = require('./Middleware/errorHandler');
const dotenv=require('dotenv').config();
const connectDB = require('./Config/dbConnection');


connectDB();
const app = express();

//const port =process.env.PORT;
const port= 5001;

app.use(express.json());
app.use(errorHandler);
app.use('/api/contacts',require('./Routes/ContactRoutes'));
app.use('/api/users',require('./Routes/UserRoutes'));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
