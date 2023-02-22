const AbstractManager = require("./AbstractManager");

class FavorisManager extends AbstractManager {
  constructor() {
    super({ table: "favoris" });
  }

  insert(favoris) {
    return this.database.query(
      `insert into ${this.table} (parents_idparent, parents_users_iduser, nounous_idnounou, nounous_users_iduser) values (?,?,?,?)`,
      [
        favoris.parents_idparent,
        favoris.parents_users_iduser,
        favoris.nounous_idnounou,
        favoris.nounous_users_iduser,
      ]
    );
  }

  update(favoris) {
    return this.database.query(
      `update ${this.table} set parents_idparent = ?, parents_users_iduser = ?, nounous_idnounou = ?, nounous_users_iduser= ? , where idfavoris = ?`,
      [
        favoris.parents_idparent,
        favoris.parents_users_iduser,
        favoris.nounous_idnounou,
        favoris.nounous_users_iduser,
        favoris.idfavoris,
      ]
    );
  }
}

module.exports = FavorisManager;
