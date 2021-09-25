exports.up = knex => knex.schema.createTable('tasks', (table) => {
  table.increments('id').notNullable().primary();
  table.string('name').unique();
  table.string('description');
  table.boolean('is_complete');
  table.integer('project_id');

  table.foreign('project_id').references('id').inTable('projects');
});

exports.down = knex => knex.schema.dropTable('tasks');
