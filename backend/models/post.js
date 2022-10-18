

module.exports= (sequelize,DataTypes)=>{

return Post=sequelize.define('posts',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    imageUrl:{
      type:DataTypes.STRING
    }

})
}

