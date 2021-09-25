const express = require('express');
const controllerTasks = require('../controllers/controller-tasks');

const RouterTasks = express.Router();

RouterTasks.post('/', controllerTasks.create);
RouterTasks.get('/', controllerTasks.findAll);
RouterTasks.get('/:id', controllerTasks.findOne);
RouterTasks.delete('/:id', controllerTasks.delete);
RouterTasks.put('/:id', controllerTasks.update);

module.exports = RouterTasks;
