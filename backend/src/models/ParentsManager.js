const AbstractManager = require("./AbstractManager");

class ParentsManager extends AbstractManager {
  constructor() {
    super({ table: "parents" });
  }

  insert(parents) {
    return this.database.query(
      `insert into ${this.table} (caf_number
,exit_permit
,image_rights
, users_idusers) values (?,?,?,?)`,
      [
        parents.caf_number,
        parents.exit_permit,
        parents.image_rights,
        parents.users_idusers,
      ]
    );
  }

  update(parents) {
    return this.database.query(
      `update ${this.table} set caf_number
 = ? , exit_permit
 = ? ,image_rights
 = ?, users_idusers = ?  where idparents = ?`,
      [
        parents.caf_number,
        parents.exit_permit,
        parents.image_rights,
        parents.users_idusers,
        parents.idparents,
      ]
    );
  }
}

module.exports = ParentsManager;
