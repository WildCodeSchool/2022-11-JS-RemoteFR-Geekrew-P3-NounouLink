const AbstractManager = require("./AbstractManager");

class ParentsManager extends AbstractManager {
  constructor() {
    super({ table: "parents" });
  }

  insert(parents) {
    return this.database.query(
      `insert into ${this.table} (numcaf,autsortie,droitimage, users_iduser) values (?,?,?,?)`,
      [
        parents.numcaf,
        parents.autsortie,
        parents.droitimage,
        parents.users_iduser,
      ]
    );
  }

  update(parents) {
    return this.database.query(
      `update ${this.table} set numcaf = ? , autsortie = ? ,droitimage = ?, users_iduser = ?  where idparents = ?`,
      [
        parents.numcaf,
        parents.autsortie,
        parents.droitimage,
        parents.users_iduser,
        parents.idparents,
      ]
    );
  }
}

module.exports = ParentsManager;
