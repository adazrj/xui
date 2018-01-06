var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var params = req.params.id;
  // res.send(params)
  console.log("----"+params);
  res.render('index', { title: params, message: 'Hello there!'});

});




module.exports = router;
