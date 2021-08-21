class TaskRepository {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = `
          create table if not exists tasks (
              id INTEGER primary key autoincrement,
              name text,
              description text,
              isComplete boolean,
              projectID INTEGER,
              constraint tasks_fk_projectID foreign Key (projectID)
              references projects(id) on update cascade on delete cascade
          )`;

    return this.dao.run(sql);
  }

  async create(name, description, isComplete, projectID) {
    const sqlInsert = 'insert into tasks (name, description, isComplete, projectID) values (?, ?, ?, ?)';

    await this.dao.run(sqlInsert, [name, description, isComplete, projectID]);

    const sql = 'select * from tasks where name = ? and description = ? and isComplete = ? and projectID = ?';

    return this.dao.get(sql, [name, description, isComplete, projectID]);
  }

  readAll() {
    const sql = 'select * from tasks';

    return this.dao.getAll(sql);
  }

  read() {
    const sql = 'select * from tasks';

    return this.dao.getAll(sql);
  }

  update(id, {
    name, description, isComplete, projectID,
  }) {
    const sql = `
    update tasks 
    set name = ?, description = ?, isComplete = ?, projectID = ?
    where id = ?
    `;

    return this.dao.run(sql, [name, description, isComplete, projectID, id]);
  }

  delete(id) {
    const sql = 'delete from tasks where id = ?';

    return this.dao.run(sql, [id]);
  }
}

module.exports = TaskRepository;
