const express = require("express")
const router = express.Router();
const cryptoCurrencyService = require("../service/CryptoCurrencyService")

var bodyParser = require('body-parser')

// parse application/json
router.use(bodyParser.urlencoded({ extended : true }));
router.use(bodyParser.json());

router.get("/status", cryptoCurrencyService.getStatus);

module.exports = router;