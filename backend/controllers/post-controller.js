const {db} = require("../util/database")
const Post=db.Post
const fileHelper=require('../util/file')
const getPosts=async (req,res)=>{
    const posts=await Post.findAll()
    res.status(200).json({
        posts:posts
    })
}
const createPost=async(req,res)=>{
    
     const post=await Post.create({
         title:req.body.title,
         content:req.body.content,
         imageUrl:req.file.path,
         author_id:1
     })

     console.log('file',req.file)

    res.status(201).json({
        message:"Post Successfully Created",
        post:post
    }) 
}

const getPost=async (req,res)=>{
   let postId=req.params.id         ///for params
     //    req.query.search     /for query

   let post=await Post.findByPk(postId)
   res.status(200).json(post)
}

const deletePost=async (req,res)=>{
    let postId=req.params.id
    let post=await Post.findByPk(postId)

    //deleting image file befor deleting post
     fileHelper.deleteFile(post.imageUrl)

   await post.destroy()
    res.status(200).json('successfully deleted')
}

const deleteAllPost=async (req,res)=>{
    let postId=req.params.id
    await Post.destroy({ truncate: true})
 //   let post=await Post.findByPk(postId)

    //deleting image file befor deleting post
   //  fileHelper.deleteFile(post.imageUrl)

  // await post.destroy()
    res.status(200).json('successfully All deleted')
}

module.exports={
    getPosts,getPost,createPost,deletePost,deleteAllPost
}