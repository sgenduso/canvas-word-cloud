var express = require('express');
var router = express.Router();
var cloudFuncs = require('../lib/cloud.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {
  var text = req.body.text_input;
  var wordRanks = cloudFuncs.wordRanks(text);
  res.render('index', {text: text});
});

module.exports = router;
