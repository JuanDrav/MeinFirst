const express = require('express');
const controllerProjects = require('../controllers/controller-projects');

const RouterProjects = express.Router();

RouterProjects.post('/', controllerProjects.create);
RouterProjects.get('/', controllerProjects.findAll);
RouterProjects.get('/:id', controllerProjects.findOne);
RouterProjects.delete('/:id', controllerProjects.delete);
RouterProjects.put('/:id', controllerProjects.update);

module.exports = RouterProjects;
