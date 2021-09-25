exports.up = knex => knex.schema.createTable('projects', (table) => {
  table.increments('id').notNullable().primary();
  table.string('name').unique();
});

exports.down = knex => knex.schema.dropTable('projects');
