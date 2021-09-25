const controllerUsers = module.exports;

const UserManager = require('../managers/user-manager');

controllerUsers.create = (req, res) => {
  const user = req.body;

  return UserManager.create(user)
    .then(result => res.status(201).send({
      user: result,
    }))
    .catch(err => res.status(500).send({
      message: `error saving in database: ${err.message}`,
    }));
};

controllerUsers.findAll = (req, res) => UserManager.readAll()
  .then(result => res.status(200).send({
    users: result,
  }))
  .catch(err => res.status(500).send({
    message: `error retreving in database: ${err.message}`,
  }));

controllerUsers.findOne = (req, res) => {
  const { id } = req.params;

  return UserManager.read(id)
    .then(result => res.status(200).send({
      user: result,
    }))
    .catch(err => res.status(500).send({
      message: `error retreving in database: ${err.message}`,
    }));
};

controllerUsers.delete = (req, res) => {
  const { id } = req.params;

  return UserManager.delete(id)
    .then(() => res.status(204).send({}))
    .catch(err => res.status(500).send({
      message: `error deleting in database: ${err.message}`,
    }));
};

controllerUsers.update = (req, res) => {
  const { id } = req.params;
  const user = req.body;

  return UserManager.update(id, user)
    .then(result => res.status(200).send({
      user: result,
    }))
    .catch(err => res.status(500).send({
      message: `error updating in database: ${err.message}`,
    }));
};
