const ProjectService = module.exports;

const ProjectRepository = require('../repositories/sql/project-repository');

ProjectService.create = name => ProjectRepository.create(name);
ProjectService.readAll = () => ProjectRepository.readAll();
ProjectService.read = id => ProjectRepository.read(id);
ProjectService.delete = id => ProjectRepository.delete(id);
ProjectService.update = (id, { name }) => ProjectRepository.update(id, { name });
