var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/phoneSearch', function (req, res, next) {
	res.render('phoneSearch', {title: 'Search Phone Number'});
});

module.exports = router;
