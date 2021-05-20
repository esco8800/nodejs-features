const db = require('./db');
const users = db();

exports.login = (username, password, callback) => {
    console.log(users.getEntity('test'));
};