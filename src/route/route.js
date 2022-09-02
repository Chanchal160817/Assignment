const express = require('express');
const _ = require('underscore')
const router = express.Router();
const chanchal = require('lodash')


router.get('/test', function (req, res) {
   
    let a= [1,2,3,5,6,7]

  count = 7,
  missing = []

for (let i = 1; i <= count; i++) {
  if (a.indexOf(i) === -1) {
    missing.push(i)
  }
}
console.log(missing)
})





module.exports = router;
