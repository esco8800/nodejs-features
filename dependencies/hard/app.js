const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');

const authController = require('./authController');
const app = module.exports = express();

app.use(bodyParser.json());
app.post('/login', authController.login);
app.use(errorHandler());

http.createServer(app).listen(3000, () => {
    console.log('Express server started');
});