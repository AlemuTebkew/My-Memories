var express = require('express');
var router = express.Router();
const {check}=require('express-validator')
const UserController=require('../../controllers/user-controller');
 //const isLoggedIn=require('../middleware/is-auth')
router.get('/',  UserController.getUsers);
router.get('/:id',  UserController.getUser);
router.post('/',[
   check('email').isEmail()
],UserController.createUser);
router.put('/:id',UserController.updateUser);
router.delete('/:id',UserController.deleteUser);


module.exports = router;
