const express = require('express')
const user = require('../controller/user')
const multer = require('multer')
const {userValidation,schemaValidation} = require('../validation/user')
const router = express.Router()

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./upload')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"||
        file.mimetype == "image/PNG" ||
        file.mimetype == "image/JPG" ||
        file.mimetype == "image/JPEG"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  }).single('image');

  router.get('/api/v1/user',user.getUser)
  router.get('/api/v1/user/:_id',user.getUserID)
  router.post('/api/v1/user',upload, userValidation(),schemaValidation, user.postUser)
  router.put('/api/v1/user/:_id',upload, user.putUser)
  router.delete('/api/v1/user/:_id', user.deleteUser)


module.exports = router;