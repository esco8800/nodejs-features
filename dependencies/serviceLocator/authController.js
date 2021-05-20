module.exports = (serviceLocator) => {
    const authService = serviceLocator.get('authService');
    const authController = {};

    authController.login = (req, res, next) => {
        authService.login(req.body.username, req.body.password,
            (err, result) => {
                console.log('login controller');
            });
        res.write('ok');
    };

    return authController;
}