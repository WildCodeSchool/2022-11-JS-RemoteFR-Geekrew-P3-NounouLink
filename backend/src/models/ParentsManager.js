const AbstractManager = require("./AbstractManager");

class ParentsManager extends AbstractManager {
  constructor() {
    super({ table: "parents" });
  }

  insert(parents) {
    return this.database.query(
      `insert into ${this.table} (caf_number, exit_permit, image_rights, users_idusers) values (?,?,?,?)`,
      [
        parents.cafNumber,
        parents.exitPermit,
        parents.imageRights,
        parents.usersIdusers,
      ]
    );
  }

  find(id) {
    return this.database.query(
      `select * from  ${this.table} WHERE id${this.table} = ?`,
      [id]
    );
  }

  update(parents) {
    return this.database.query(
      `update ${this.table} set caf_number = ? , exit_permit = ? ,image_rights = ?, users_idusers = ?  where idparents = ?`,
      [
        parents.cafNumber,
        parents.exitPermit,
        parents.imageRights,
        parents.usersIdusers,
        parents.idparents,
      ]
    );
  }
}
module.exports = ParentsManager;
