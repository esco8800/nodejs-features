const authService = require('./authService');

exports.login = (req, res, next) => {
    authService.login(req.body.username, req.body.password,
    (err, result) => {
        console.log('login controller');
    });
    res.write('ok');
};