const TaskManager = module.exports;

const TaskService = require('../services/task-service');

TaskManager.create = (name, description, isComplete, projectID) => (
  TaskService.create(name, description, isComplete, projectID)
);
TaskManager.readAll = () => TaskService.readAll();
TaskManager.read = id => TaskService.read(id);
TaskManager.delete = id => TaskService.delete(id);
TaskManager.update = (id, task) => TaskService.update(id, task);
