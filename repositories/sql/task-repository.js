const TaskRepository = module.exports;

const sqlDB = require('./_index');

TaskRepository.create = async (name, description, isComplete, projectID) => {
  await sqlDB('tasks').insert({
    name,
    description,
    is_complete: isComplete,
    project_id: projectID,
  });

  return sqlDB('tasks').select(['id', 'name', 'description', 'is_complete', 'project_id']).where({ name });
};

TaskRepository.readAll = () => (
  sqlDB('tasks').select(['id', 'name', 'description', 'is_complete', 'project_id'])
);

TaskRepository.read = id => (
  sqlDB('tasks').select(['id', 'name', 'description', 'is_complete', 'project_id']).where({ id })
);

TaskRepository.update = async (id, {
  name, description, isComplete, projectID,
}) => {
  await sqlDB('tasks').update({
    name,
    description,
    is_complete: isComplete,
    project_id: projectID,
  }).where({ id });

  return sqlDB('tasks').select(['id', 'name', 'description', 'is_complete', 'project_id']).where({ name });
};

TaskRepository.delete = id => (
  sqlDB('tasks').delete().where({ id })
);
