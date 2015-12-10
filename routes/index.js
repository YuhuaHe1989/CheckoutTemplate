var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Checkout' });
});

router.post('/', function(req, res, next) {
  console.log('req.body', req.body);
  res.redirect('/');
});

module.exports = router;
