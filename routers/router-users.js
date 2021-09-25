const express = require('express');
const controllerUsers = require('../controllers/controller-users');

const RouterUsers = express.Router();

RouterUsers.post('/', controllerUsers.create);
RouterUsers.get('/', controllerUsers.findAll);
RouterUsers.get('/:id', controllerUsers.findOne);
RouterUsers.delete('/:id', controllerUsers.delete);
RouterUsers.put('/:id', controllerUsers.update);

module.exports = RouterUsers;
