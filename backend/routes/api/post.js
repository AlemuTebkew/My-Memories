var express = require('express');
var router = express.Router();
const { getPosts, createPost, getPost, deletePost,deleteAllPost } = require("../../controllers/post-controller");

router.get('/',getPosts)
router.get('/delete',deleteAllPost)
router.post('/',createPost)
router.get('/:id',getPost)
router.delete('/:id',deletePost)


module.exports=router