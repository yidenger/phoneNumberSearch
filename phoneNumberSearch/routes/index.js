var express = require('express');
var router = express.Router();
var queryPhoneNumber = require('query-mobile-phone-area');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/phoneSearch', function (req, res, next) {
	res.render('phoneSearch', {title: 'Search Phone Number'});
});

router.post('/phoneNumber/search', function (req, res) {
	var phoneNumber = req.body.phoneNumber;
	console.log(phoneNumber);
	var data = queryPhoneNumber(phoneNumber);
	console.log(data);
	res.send(data);
	
});

module.exports = router;
