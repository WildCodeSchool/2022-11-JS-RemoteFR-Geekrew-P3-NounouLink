class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} WHERE id${this.table} = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.database.query(
      `delete from ${this.table} where id${this.table} = ?`,
      [id]
    );
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = AbstractManager;
