class ProjectRepository {
  constructor(dao) {
    this.dao = dao;
  }

  createTable() {
    const sql = `
        create table if not exists projects (
            id INTEGER primary key autoincrement,
            name text
        )`;

    return this.dao.run(sql);
  }

  async create(name) {
    const sqlInsert = 'insert into projects (name) values (?)';

    await this.dao.run(sqlInsert, [name]);

    const sql = 'select * from projects where name = ?';

    return this.dao.get(sql, [name]);
  }

  readAll() {
    const sql = 'select * from projects';

    return this.dao.getAll(sql);
  }

  read(id) {
    const sql = 'select * from projects where id = ?';

    return this.dao.get(sql, [id]);
  }

  async update(id, { name }) {
    const sqlUpdate = `
    update projects 
    set name = ?
    where id = ?
    `;

    await this.dao.run(sqlUpdate, [name, id]);

    const sql = 'select * from projects where id = ?';

    return this.dao.get(sql, [id]);
  }

  delete(id) {
    const sql = 'delete from projects where id = ?';

    return this.dao.run(sql, [id]);
  }
}

module.exports = ProjectRepository;
