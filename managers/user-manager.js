const UserManager = module.exports;

const UserService = require('../services/user-service');

UserManager.create = user => UserService.create(user);
UserManager.readAll = () => UserService.readAll();
UserManager.read = id => UserService.read(id);
UserManager.delete = id => UserService.delete(id);
UserManager.update = (id, user) => UserService.update(id, user);
