require('dotenv').config({ path: `${__dirname}/.env` });
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const AppDAO = require('./dao');
const ProjectRepository = require('./projectRepository');
const TaskRepository = require('./taskRepository');
const UsersModel = require('./models/users');

const app = express();
const port = process.env.PORT;
const dao = new AppDAO('./MeinFirst.db');

const projectRepo = new ProjectRepository(dao);
const taskRepo = new TaskRepository(dao);

app.use(bodyParser.json({}));

app.get('/tasks', (req, res) => {
  taskRepo.readAll().then((result) => {
    res.send(result);
  });
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  taskRepo.create(task.name, task.description, task.isComplete, task.projectID).then((result) => {
    res.send(result);
  });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  taskRepo.delete(id).then(() => {
    res.send({});
  });
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { description } = req.body;
  const { isComplete } = req.body;
  const { projectID } = req.body;
  taskRepo.update(id, {
    name, description, isComplete, projectID,
  }).then((result) => {
    res.send(result);
  });
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  taskRepo.read(id).then((result) => {
    res.send(result);
  });
});

// Metodos Projectos

app.get('/projects', (req, res) => {
  projectRepo.readAll().then((result) => {
    res.send(result);
  });
});

app.post('/projects', (req, res) => {
  const project = req.body;
  projectRepo.create(project.name).then((result) => {
    res.send(result);
  });
});

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  projectRepo.delete(id).then(() => {
    res.send({});
  });
});

app.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  projectRepo.update(id, { name }).then((result) => {
    res.send(result);
  });
});

app.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  projectRepo.read(id).then((result) => {
    res.send(result);
  });
});

app.post('/users', (req, res) => {
  const user = req.body;
  const savedUser = new UsersModel();
  savedUser.name = user.name;
  savedUser.lastName = user.lastName;
  savedUser.password = user.password;
  savedUser.citizenNumber = user.citizenNumber;
  savedUser.gender = user.gender;
  savedUser.save((error, finalUser) => {
    if (error) {
      res.status(500).send({ message: `error saving in database: ${error.message}` });
    }
    res.status(201).send({ user: finalUser });
  });
});

app.get('/users', (req, res) => {
  UsersModel.find({}, (error, users) => {
    if (error) {
      res.status(500).send({ message: `error retreving in database: ${error.message}` });
    }
    res.status(201).send({ users });
  });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  UsersModel.findById(id, (error, user) => {
    if (error) {
      res.status(500).send({ message: `error retreving in database: ${error.message}` });
    }
    res.status(201).send({ user });
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  UsersModel.findById(id, (error, user) => {
    if (error) {
      return res.status(500).send({ message: `error retreving in database: ${error.message}` });
    }

    return user.remove((err) => {
      if (err) {
        return res.status(500).send({ message: `error deleting in database: ${err.message}` });
      }

      return res.status(200).send({});
    });
  });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const userToUpdate = req.body;
  UsersModel.findByIdAndUpdate(id, userToUpdate, { new: true }, (error, user) => {
    if (error) {
      return res.status(500).send({ message: `error updating in database: ${error.message}` });
    }

    return res.status(200).send({ user });
  });
});

app.listen(port, () => {
  Promise.all([
    mongoose.connect('mongodb://localhost:27017/ProjectOne', (error) => {
      if (error) { throw error; }
    }),
    projectRepo.createTable(),
    taskRepo.createTable(),
  ]).then(() => {
    console.log(`app running in http://localhost:${port}`);
  }).catch((error) => {
    console.log('app crashed by this error: ', error);
  });
});
