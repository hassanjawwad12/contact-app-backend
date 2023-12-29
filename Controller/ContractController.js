const asyncHandler = require('express-async-handler');
const Contact = require('../Models/contactModel');

//@desc Get all Contacts
//@route GET /api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res) => {
    //this fetches the id from the contact model 
    const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).json(
        contacts
    );
});


//@desc Get a Contact
//@route GET /api/contacts/:id
//@access Private
const getContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
       res.status(404)
       throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});


//@desc Create a Contact
//@route POST /api/contacts
//@access Private
const CreateContact = asyncHandler(async (req, res) => {

    console.log("The request body is:", req.body);
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All Fields are required");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    });


    res.status(201).json(contact);
});
//201 means resource created
//we can also use :  return res.status(400).json({message:"Please provide name,email and phone"});



//@desc Update a Contact
//@route PUT /api/contacts/:id
//@access Private
const UpdateContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
       res.status(404)
       throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id.toString()){
        res.status(403)
        throw new Error("You are not authorized to update this contact");
    }
  
    const updatedContact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,{
            new:true,
        }
    );

    res.status(200).json(updatedContact);
});


//@desc Delete a Contact
//@route DELETE /api/contacts/:id
//@access Private
const DeleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
       res.status(404)
       throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id.toString()){
        res.status(403)
        throw new Error("You are not authorized to update this contact");
    }
  
  
    await contact.deleteOne({ _id: req.params.id});
   // await Contact.remove();
    res.status(200).json(contact);
});


module.exports = { getContact, CreateContact, UpdateContact, DeleteContact, getContacts };