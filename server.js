const express = require('express');
//const dotenv=require('dotenv').config();

const app = express();

//const port =process.env.PORT || 5000;
const port= 5001;

app.get('/api/contacts', (req, res) => {
    res.status(200).json(
        {message: 'Contacts API'}
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
