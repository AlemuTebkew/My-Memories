const {db}=require('../util//database');
//const User = require('../models/user');
const User = db.User;


const createUser =async(req,res)=>{

    let userInfo={
        email:req.body.email,
        password:req.body.password
    };

    try{
        let user= await User.create(userInfo); 
        res.status(200).json(user);
        console.log('created user from sequlize'+user); 
    }catch(err){
        console.log('error while creating user'+err); 

    }
 
}

const getUsers = async(req,res)=>{
    try{
    let users= await User.findAll({});
     res.status(200).send(users);
     console.log(users);
    }catch(err){
        console.log(err); 

    }
 }

 const getUser = async(req,res)=>{
    
    let id=req.params.id;
    let user= await User.findOne({where:{id:id}});
     res.status(200).send(user);
     console.log(user);
 
 }


 //update user

 const updateUser = async(req,res)=>{
    
    let id=req.params.id;
    let user= await User.update(req.body,{where:{id:id}});
    if(user){
             res.status(200).send(await User.findOne({where:{id:id}}));

    }
     console.log(user);
 
 }


  //delete user

  const deleteUser = async(req,res)=>{
    
    let id=req.params.id;
    await User.destroy({where:{id:id}});
     res.status(200).send('deleted successfully');
     console.log('deleted');
 
 }

 module.exports={
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
 }