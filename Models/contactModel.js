const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
        unique: true
    },


}, 
{
    timestamps: true
}

);

module.exports = mongoose.model('Contact', contactSchema);