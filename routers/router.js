const express = require('express');
const RouterProjects = require('./router-projects');
const RouterTasks = require('./router-tasks');
const RouterUsers = require('./router-users');

const Router = express.Router();

Router.use('/projects', RouterProjects);
Router.use('/tasks', RouterTasks);
Router.use('/users', RouterUsers);

module.exports = Router;
