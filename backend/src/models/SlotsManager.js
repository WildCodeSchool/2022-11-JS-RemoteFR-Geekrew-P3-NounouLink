const AbstractManager = require("./AbstractManager");

class SlotsManager extends AbstractManager {
  constructor() {
    super({ table: "slots" });
  }

  insert(slots) {
    return this.database.query(
      `insert into ${this.table} ( nannies_idnannies, nannies_users_idusers, libelle_jour, heure_debut, heure_fin, nbre_place) values (?, ?, ?, ?, ?, ?)`,
      [
        slots.nannies_idnannies,
        slots.nannies_users_idusers,
        slots.libelle_jour,
        slots.heure_debut,
        slots.heure_fin,
        slots.nbre_place,
      ]
    );
  }

  update(slots) {
    return this.database.query(
      `update ${this.table} set idslots = ?, nannies_idnannies = ?, nannies_users_idusers = ?, libelle_jour = ?, heure_debut = ?, heure_fin = ?, nbre_place = ? where idusers = ?`,
      [
        slots.idslots,
        slots.nannies_idnannies,
        slots.nannies_users_idusers,
        slots.libelle_jour,
        slots.heure_debut,
        slots.heure_fin,
        slots.nbre_place,
        slots.idusers,
      ]
    );
  }
}

module.exports = SlotsManager;
