const AbstractManager = require("./AbstractManager");

class ChildrenManager extends AbstractManager {
  constructor() {
    super({ table: "children" });
  }

  insert(children) {
    return this.database.query(
      `insert into ${this.table} (firstname,lastname,birthdate,canwalk,allergie,insurance,healthbook,parents_idparents,parents_users_idusers) values (?,?,?,?,?,?,?,?,?)`,
      [
        children.firstname,
        children.lastname,
        children.birthdate,
        children.canwalk,
        children.allergie,
        children.insurance,
        children.healthbook,
        children.parentsIdparents,
        children.parentsUsersIdusers,
      ]
    );
  }

  update(children) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, birthdate = ?, canwalk = ?, allergie = ?, insurance = ?, healthbook = ? where idchildren = ?`,
      [
        children.firstname,
        children.lastname,
        children.birthdate,
        children.canwalk,
        children.allergie,
        children.insurance,
        children.healthbook,
        children.idchildren,
      ]
    );
  }
}

module.exports = ChildrenManager;
