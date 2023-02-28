const AbstractManager = require("./AbstractManager");

class ChildrenManager extends AbstractManager {
  constructor() {
    super({ table: "children" });
  }

  insert(children) {
    return this.database.query(
      `insert into ${this.table} (firstname,lastname,birthdate,canwalk,allergie,assurance,carnetsante) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        children.firstname,
        children.lastname,
        children.birthdate,
        children.canwalk,
        children.allergie,
        children.assurance,
        children.carnetsante,
      ]
    );
  }

  update(children) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, birthdate = ?, canwalk = ?, allergie = ?, assurance = ?, carnetsante = ? where idchildren = ?`,
      [
        children.firstname,
        children.lastname,
        children.birthdate,
        children.canwalk,
        children.allergie,
        children.assurance,
        children.carnetsante,
        children.idchildren,
      ]
    );
  }
}

module.exports = ChildrenManager;
