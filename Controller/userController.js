const asyncHandler = require('express-async-handler');

//@desc Register a user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message:"Register the User"})
   
});

//@desc Login a user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message:"Login the User"})
   
});

//@desc Get a user information
//@route GET /api/users/login
//@access Public
const currentUser = asyncHandler(async (req, res) => {
    res.json({message:"Current User Information"})
   
});



module.exports = {registerUser,loginUser,currentUser};