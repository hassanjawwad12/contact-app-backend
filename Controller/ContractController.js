//@desc Get all Contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => { 
    res.status(200).json(
        {message: 'Get all Contacts'}
    );
};


//@desc Get a Contact
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
    res.status(200).json(
        {message: `Get a Contact ${req.params.id}`}
    );
}


//@desc Create a Contact0
//@route POST /api/contacts
//@access Public
const CreateContact = (req, res) => { 

    console.log("The request body is:" ,req.body);
    const{name,email,phone}=req.body;

    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields are required");
        }
    res.status(201).json(
        {message: 'Create a Contact'}
    );
};
//201 means resource created
//we can also use :  return res.status(400).json({message:"Please provide name,email and phone"});
   


//@desc Update a Contact
//@route PUT /api/contacts/:id
//@access Public
const UpdateContact = (req, res) => { 
    res.status(200).json(
        {message: `Update a Contact ${req.params.id}`}
    );
};


//@desc Delete a Contact
//@route DELETE /api/contacts/:id
//@access Public
const DeleteContact = (req, res) => { 
    res.status(200).json(
        {message: `Delete a Contact ${req.params.id}`}
    );
};





module.exports = {getContact,CreateContact,UpdateContact,DeleteContact,getContacts};