const ProjectManager = module.exports;

const ProjectService = require('../services/project-service');

ProjectManager.create = name => ProjectService.create(name);
ProjectManager.readAll = () => ProjectService.readAll();
ProjectManager.read = id => ProjectService.read(id);
ProjectManager.delete = id => ProjectService.delete(id);
ProjectManager.update = (id, { name }) => ProjectService.update(id, { name });
