const express = require('express')
const router = express.Router()
const {login, signup, dashboard, resetpassword, newpassword,newpassword2, getUsers,searchUser, deleteUser, updateUser,getUser, loading,uploadProfile} = require('../controllers/auth')
const authMiddleware = require('../middleware/authentication')
const permissionMiddleware = require('../middleware/permissions')
const User = require('../models/User')
const multer = require('multer');
const storage = multer.diskStorage({});
const fileFilter = (req,file,cb)=>{
  
  if(file.mimetype.startsWith('image')){
      cb(null, true)
  }else{
      cb('Invalid image file!', false);
  }
}
const uploads = multer({storage, fileFilter})


router.get('/', loading)
router.post('/login',login)
router.get('/login',getUsers)
router.post('/signup',signup)
router.get('/search',searchUser)
router.post('/resetpassword', resetpassword)
router.put('/newpassword', newpassword)
router.put('/newpassword2/:id', newpassword2)
router.put('/:id', updateUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)

//posting picture
router.post('/upload/:user', uploads.single('profile'), uploadProfile)

router.get('/', authMiddleware, dashboard);


module.exports = router


