const express = require('express');
const _ = require('underscore')
const abc = require('../logger/logger')
const date = require('../util/helper')
const formatter = require('../validator/formatter')
const router = express.Router();

router.get('/test', function(req,res){
    
    abc.welcome()
    date.printDate()
    date.printMonth()
    date.getBatchInfo()
    formatter.abc()
    res.send('My second ever api!')
})

module.exports = router;
