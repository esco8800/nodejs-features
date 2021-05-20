module.exports = (serviceLocator) => {

    const db = serviceLocator.get('db');
    const users = db.getEntity();
    const authService = {};

    authService.login = (username, password, callback) => {
        console.log(users.getEntity('test'));
    }

    return authService;
};
