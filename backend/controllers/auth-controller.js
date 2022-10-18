const {db}=require('../util//database');
//const User = require('../models/user');
// const User = db.User;

const register=(req,res)=>{

}

const Login=async (req,res)=>{
  let email=req.body.email;
  let password=req.body.password;

  const user=await db.User.findOne({email:email});
    if(!user){
        throw('User Not Found !')
    }
    if(! (user.password === password)){
        throw('incorrect password')
    }
        res.json('Login')
}

const Logout=(req,res)=>{
    
}

module.exports={Login,Logout}