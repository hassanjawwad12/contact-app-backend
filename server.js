const express = require('express');
//const dotenv=require('dotenv').config();

const app = express();

//const port =process.env.PORT || 5000;
const port= 5001;

app.use('/api/contacts',require('./Routes/ContactRoutes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
