const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');
const svcLoc = require('./serviceLocator')();

svcLoc.register('dbName', 'example-db');
svcLoc.register('tokenSecret', 'SHHH!');
svcLoc.factory('db', require('./db'));
svcLoc.factory('authService', require('./authService'));
svcLoc.factory('authController', require('./authController'));

const authController = svcLoc.get('authController');
const app = module.exports = express();

app.use(bodyParser.json());
app.post('/login', authController.login);
app.use(errorHandler());

http.createServer(app).listen(3000, () => {
    console.log('Express server started');
});