module.exports = (serviceLocator) => {
    const dbName = serviceLocator.get('dbName');
    return {
        getEntity: () => {
            return dbName;
        }
    }
};