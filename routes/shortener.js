var express = require('express');
var router = express.Router();
const ShortenerController = require('../controllers/ShortenerController');

//Get all urls.
router.get('/', ShortenerController.getAllUrls);

//Encode new url.
router.post('/encode', ShortenerController.encode);

router.post('/decode', ShortenerController.decode);

router.post('/statistics', ShortenerController.getStatistics);
module.exports = router;
