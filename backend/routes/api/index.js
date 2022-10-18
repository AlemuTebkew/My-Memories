var express = require('express');
var router = express.Router();

const userRouter=require('./user')
const postRouter=require('./post')
const authRouter=require('./auth')

router.use('/users',userRouter);
router.use('/posts',postRouter)
router.use('/auth',authRouter)
module.exports =router;
