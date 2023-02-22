const AbstractManager = require("./AbstractManager");

class CrenauxManager extends AbstractManager {
  constructor() {
    super({ table: "crenaux" });
  }

  insert(crenaux) {
    return this.database.query(
      `insert into ${this.table} ( nounous_idnounou, nounous_users_iduser, libelle_jour, heure_debut, heure_fin, nbre_place) values (?, ?, ?, ?, ?, ?)`,
      [
        crenaux.nounous_idnounou,
        crenaux.nounous_users_iduser,
        crenaux.libelle_jour,
        crenaux.heure_debut,
        crenaux.heure_fin,
        crenaux.nbre_place,
      ]
    );
  }

  update(crenaux) {
    return this.database.query(
      `update ${this.table} set idcrenaux = ?, nounous_idnounou = ?, nounous_users_iduser = ?, libelle_jour = ?, heure_debut = ?, heure_fin = ?, nbre_place = ? where iduser = ?`,
      [
        crenaux.idcrenaux,
        crenaux.nounous_idnounou,
        crenaux.nounous_users_iduser,
        crenaux.libelle_jour,
        crenaux.heure_debut,
        crenaux.heure_fin,
        crenaux.nbre_place,
        crenaux.iduser,
      ]
    );
  }
}

module.exports = CrenauxManager;
