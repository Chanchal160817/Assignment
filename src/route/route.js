const express = require('express');
const router = express.Router();
 
const NovelController = require("../controller/userController")
const NovelModel = require("../models/userModel")
 
 
router.post("/createBook" , NovelController.createBook)
 
router.get("/bookList" , NovelController.bookList )
 
router.post("/bookInYear" , NovelController.bookInYear)
 
router.get("/randomBooks", NovelController.randomBooks)
 
 router.post("/particularBooks" , NovelController.particularBooks)
 
router.get("/XINRBooks" , NovelController.XINRBooks)
 
module.exports = router;

