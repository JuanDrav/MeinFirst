const controllerProjects = module.exports;

const ProjectManager = require('../managers/project-manager');

controllerProjects.create = (req, res) => {
  const { name } = req.body;

  return ProjectManager.create(name)
    .then(result => res.status(201).send({
      project: result,
    }))
    .catch(err => res.status(500).send({
      message: `error saving in database: ${err.message}`,
    }));
};

controllerProjects.findAll = (req, res) => ProjectManager.readAll()
  .then(result => res.status(200).send({
    projects: result,
  }))
  .catch(err => res.status(500).send({
    message: `error retreving in database: ${err.message}`,
  }));

controllerProjects.findOne = (req, res) => {
  const { id } = req.params;

  return ProjectManager.read(id)
    .then(result => res.status(200).send({
      project: result,
    }))
    .catch(err => res.status(500).send({
      message: `error retreving in database: ${err.message}`,
    }));
};

controllerProjects.delete = (req, res) => {
  const { id } = req.params;

  return ProjectManager.delete(id)
    .then(() => res.status(204).send({}))
    .catch(err => res.status(500).send({
      message: `error deleting in database: ${err.message}`,
    }));
};

controllerProjects.update = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  return ProjectManager.update(id, { name })
    .then(result => res.status(200).send({
      project: result,
    }))
    .catch(err => res.status(500).send({
      message: `error updating in database: ${err.message}`,
    }));
};
