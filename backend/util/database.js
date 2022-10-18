const Sequelize=require('sequelize')
const PostModel=require('../models/post')
const User=require('../models/user')
const sequelize= new Sequelize('my-memory','root','',{dialect:'mysql',host:'localhost',port:'3308',})

try {
    sequelize.authenticate();
   console.log('Sequelize Connection has been established successfully.');
 } catch (error) {
   console.error('Sequelize Unable to connect to the database:', error);
 }
 
 const db ={}

 db.sequelize=sequelize
 db.Sequelize=Sequelize
 //db.users=require('../models/user'),
 db.Post=PostModel(sequelize,Sequelize)
 db.User=User(sequelize,Sequelize)
module.exports ={db,sequelize};
