const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
router.post("/createBook", userController.createBook  ) 
router.post("/createNovel" , userController.createNovel )
router.get("/ChetanBhagatBooks" , userController.ChetanBhagatBooks)
router.get("/updateTwoStates" , userController.updateTwoStates)
router.get("/authorPrice" , userController.authorPrice)
module.exports = router;
