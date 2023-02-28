const AbstractManager = require("./AbstractManager");

class SuperusersManager extends AbstractManager {
  constructor() {
    super({ table: "superusers" });
  }

  insert(superusers) {
    return this.database.query(
      `insert into ${this.table} (idsuperusers, users_idusers) values (?)`,
      [superusers.idsuperusers, superusers.users_idusers]
    );
  }

  update(superusers) {
    return this.database.query(
      `update ${this.table} set users_idusers = ? where idsuperusers = ?`,
      [superusers.idsuperusers, superusers.users_idusers]
    );
  }
}

module.exports = SuperusersManager;
