const AbstractManager = require("./AbstractManager");

class ParentsManager extends AbstractManager {
  constructor() {
    super({ table: "parents" });
  }

  insert(parents) {
    return this.database.query(
      `insert into ${this.table} (numcaf,autsortie,droitimage, users_idusers) values (?,?,?,?)`,
      [
        parents.numcaf,
        parents.autsortie,
        parents.droitimage,
        parents.users_idusers,
      ]
    );
  }

  update(parents) {
    return this.database.query(
      `update ${this.table} set numcaf = ? , autsortie = ? ,droitimage = ?, users_idusers = ?  where idparents = ?`,
      [
        parents.numcaf,
        parents.autsortie,
        parents.droitimage,
        parents.users_idusers,
        parents.idparents,
      ]
    );
  }
}

module.exports = ParentsManager;
