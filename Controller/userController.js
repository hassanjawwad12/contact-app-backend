const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../Models/userModel');
const { ConnectionStates } = require('mongoose');

//@desc Register a user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("Please provide all the fields");
    }

    const userAvailable= await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    //we cannot store the raw password so we hash it using the bcrypt library and speed up the process 
    //hash password ,  bcrypt provide us with a promise so we have to use await
    const hashedPassword= await bcrypt.hash(password,10);
    //10 is the number of salt rounds 
   console.log("Hashed Password:",hashedPassword);

   const user= await User.create({
         username,
         email,
         password:hashedPassword,
    });
    console.log ("user created:",user);

    if(user){
        res.status(201).json({
            _id:user._id,
            email:user.email,
        })
    }
    else {
        res.status(400);
        throw new Error("Invalid user data");
    }
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