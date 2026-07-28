const express = require("express");

const router = express.Router();


// sample data 
  const users=[
    {
        id:1,
        name:"Lucky",
        email:"rew@gmial.com"


    },

    {
        id:2, 
        name:"Rahu",
        email:"rahu12@gmail.com"
    }
 ];

///routes
// get 
router.get("/users",(req,res)=>{
    res.json(users);
});

// Post
app.post("/users",(req,res)=>{
    const{name,email}=req.body;
// validation 
if(!name||!email){
    return res.status(400).json({
        message:"Name and email are required"
    });
}

const newUser={
    id:users.length+1,
    name,
    email
};

users.push(newUser);

res.status(201).json({
   message:"User Added Succesfully",
   user:newUser
});
});

module.exports = router