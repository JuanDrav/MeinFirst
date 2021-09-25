const UserService = module.exports;

const UserRepository = require('../repositories/nosql/user-repository');

UserService.create = user => UserRepository.create(user);
UserService.readAll = () => UserRepository.readAll();
UserService.read = id => UserRepository.read(id);
UserService.delete = id => UserRepository.delete(id);
UserService.update = (id, user) => UserRepository.update(id, user);
