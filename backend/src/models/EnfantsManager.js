const AbstractManager = require("./AbstractManager");

class EnfantsManager extends AbstractManager {
  constructor() {
    super({ table: "enfants" });
  }

  insert(enfants) {
    return this.database.query(
      `insert into ${this.table} (firstname,lastname,birthdate,canwalk,allergie,assurance,carnetsante) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        enfants.firstname,
        enfants.lastname,
        enfants.birthdate,
        enfants.canwalk,
        enfants.allergie,
        enfants.assurance,
        enfants.carnetsante,
      ]
    );
  }

  update(enfants) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, birthdate = ?, canwalk = ?, allergie = ?, assurance = ?, carnetsante = ? where idenfants = ?`,
      [
        enfants.firstname,
        enfants.lastname,
        enfants.birthdate,
        enfants.canwalk,
        enfants.allergie,
        enfants.assurance,
        enfants.carnetsante,
        enfants.idenfants,
      ]
    );
  }
}

module.exports = EnfantsManager;
