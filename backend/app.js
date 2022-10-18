    var createError = require("http-errors");
    var express = require("express");
    const multer=require('multer')

    const apiRouter = require("./routes/api/index");
    const {db} = require("./util/database");

    var app = express();

    const fileStorage=multer.diskStorage({
        destination:(req,file,cb)=>{
          cb(null,'images')
        },
        filename:(req,file,cb)=>{
        //  cb(null, `${Math.floor(Math.random()*1000)} - ${file.originalname}`)
          cb(null, `${new Date().getTime()}-${file.originalname}`)
        } 
    });
    const fileFilter=(req,file,cb)=>{
          if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){
            cb(null,true)
          }else{
            cb(null,false)
          }

    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    //cors middleware
    app.use((req,res,next)=>{
      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader('Access-Control-Allow-Methods','*');
      next();

    })
    //app.use(multer({dest:'./images'}).single('image'))//a middleware for encodding multipart/form-data
    app.use(multer({storage:fileStorage,fileFilter:fileFilter}).single('image'))//a middleware for encodding multipart/form-data
    app.use("/api", apiRouter);

    db.sequelize
      .sync()
      .then((result) => {
        app.listen(3000,(err)=>{
          console.log('listening on port 3000')
        })
      })
      .catch((err) => {});

    module.exports = app;
