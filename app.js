const appConfig = require('./app_config.json')

const express = require('express')
const bodyParser = require('body-parser')

const app = express();

// Base Address
const NAME = appConfig.BASE_SERVER.NAME
const PORT = process.env.PORT || appConfig.BASE_SERVER.PORT;
const HOST = appConfig.BASE_SERVER.HOST;

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const nonSecureController = require('./controller/NonSecureController')
app.use("/non/secure", nonSecureController);

app.listen(PORT, HOST);
console.info(`[${NAME}] Running on http://${HOST}:${PORT}`);