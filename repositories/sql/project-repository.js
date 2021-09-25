const ProjectRepository = module.exports;

const sqlDB = require('./_index');

ProjectRepository.create = async (name) => {
  await sqlDB('projects').insert({ name });

  return sqlDB('projects').select(['id', 'name']).where({ name });
};

ProjectRepository.readAll = () => (
  sqlDB('projects').select(['id', 'name'])
);

ProjectRepository.read = id => (
  sqlDB('projects').select(['id', 'name']).where({ id }).first()
);

ProjectRepository.update = (id, { name }) => (
  sqlDB('projects').update({ name }).where({ id })
);

ProjectRepository.delete = id => (
  sqlDB('projects').delete().where({ id })
);
