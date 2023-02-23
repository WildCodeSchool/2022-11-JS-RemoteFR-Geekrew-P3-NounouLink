const AbstractManager = require("./AbstractManager");

class SuperutilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "superutilisateur" });
  }

  insert(superutilisateur) {
    return this.database.query(
      `insert into ${this.table} (idsuperutilisateur, users_iduser) values (?)`,
      [superutilisateur.idsuperutilisateur, superutilisateur.users_iduser]
    );
  }

  update(superutilisateur) {
    return this.database.query(
      `update ${this.table} set users_iduser = ? where idsuperutilisateur = ?`,
      [superutilisateur.idsuperutilisateur, superutilisateur.users_iduser]
    );
  }
}

module.exports = SuperutilisateurManager;
