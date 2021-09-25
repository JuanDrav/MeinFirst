const controllerTasks = module.exports;

const TaskManager = require('../managers/task-manager');

controllerTasks.create = (req, res) => {
  const {
    name,
    description,
    isComplete,
    projectID,
  } = req.body;

  return TaskManager.create(name, description, isComplete, projectID)
    .then(result => res.status(201).send({
      task: result,
    }))
    .catch(err => res.status(500).send({
      message: `error saving in database: ${err.message}`,
    }));
};

controllerTasks.findAll = (req, res) => TaskManager.readAll()
  .then(result => res.status(200).send({
    task: result,
  }))
  .catch(err => res.status(500).send({
    message: `error retreving in database: ${err.message}`,
  }));

controllerTasks.findOne = (req, res) => {
  const { id } = req.params;

  return TaskManager.read(id)
    .then(result => res.status(200).send({
      task: result,
    }))
    .catch(err => res.status(500).send({
      message: `error retreving in database: ${err.message}`,
    }));
};

controllerTasks.delete = (req, res) => {
  const { id } = req.params;

  return TaskManager.delete(id)
    .then(() => res.status(204).send({}))
    .catch(err => res.status(500).send({
      message: `error deleting in database: ${err.message}`,
    }));
};

controllerTasks.update = (req, res) => {
  const { id } = req.params;
  const task = req.body;

  return TaskManager.update(id, task)
    .then(result => res.status(200).send({
      task: result,
    }))
    .catch(err => res.status(500).send({
      message: `error updating in database: ${err.message}`,
    }));
};
