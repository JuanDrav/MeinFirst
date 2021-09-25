const TaskService = module.exports;

const ProjectRepository = require('../repositories/sql/project-repository');
const TaskRepository = require('../repositories/sql/task-repository');

TaskService.create = async (name, description, isComplete, projectID) => {
  const project = await ProjectRepository.read(projectID);

  if (!project) {
    throw new Error(`Project with id:${projectID} doesn't exist`);
  }

  return TaskRepository.create(name, description, isComplete, projectID);
};
TaskService.readAll = () => TaskRepository.readAll();
TaskService.read = id => TaskRepository.read(id);
TaskService.delete = id => TaskRepository.delete(id);
TaskService.update = (id, task) => TaskRepository.update(id, task);
