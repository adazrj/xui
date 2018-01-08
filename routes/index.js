var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // var params = req.params.id;
  // res.send(params)
  // console.log("----"+params);
  res.render('index');
 
});

// router.get('/input', function (req, res, next) { 
//     res.render('partials/input.html');
// });

module.exports = router;
