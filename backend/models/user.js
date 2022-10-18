
const { DataTypes } = require('sequelize')
const {sequelize} = require('../util/database')
const Post = require('./post')
module.exports=(sequelize,DataTypes)=>{
return User = sequelize.define('users', {
    // Model attributes are defined here
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //field:'first_name'
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
}
//   User.hasMany(Post)
//   module.exports = User;


  