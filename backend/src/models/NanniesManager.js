const AbstractManager = require("./AbstractManager");

class NanniesManager extends AbstractManager {
  constructor() {
    super({ table: "nannies" });
  }

  insert(nannies) {
    return this.database.query(
      `insert into ${this.table} (users_idusers,notes,photos,tarif_horaire,nom_annonce,adresse_garde,photo_profil,presentation,psc1,pedagogie,niveau_diplome,experience,hygiene,heures_sup,tarif_majore,prix_kilometre,tarif_repas,assurance_habitation,assurance_auto,piece_identite,attestation_secu,justificatif_domicile,diplome,numero_aggrement,date_aggrement,places_maxi) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        nannies.users_idusers,
        nannies.notes,
        nannies.photos,
        nannies.tarif_horaire,
        nannies.nom_annonce,
        nannies.adress_garde,
        nannies.photo_profil,
        nannies.presentation,
        nannies.psc1,
        nannies.pedagogie,
        nannies.niveau_diplome,
        nannies.experience,
        nannies.hygiene,
        nannies.heures_sup,
        nannies.tarif_majore,
        nannies.prix_kilometre,
        nannies.tarif_repas,
        nannies.assurance_habitation,
        nannies.assurance_auto,
        nannies.piece_identite,
        nannies.attestation_secu,
        nannies.justificatif_domicile,
        nannies.diplome,
        nannies.numero_aggrement,
        nannies.date_aggrement,
        nannies.places_maxi,
      ]
    );
  }

  update(nannies) {
    return this.database.query(
      `update ${this.table} set users_idusers = ?, notes = ?, photos = ?, tarif_horaire = ?, nom_annonce = ?, adress_garde = ?, photo_profil = ?, presentation = ?, psc1 = ?, pedagogie = ?, niveau_diplome = ?, experience = ?, hygiene = ?, heures_supp = ?, tarif_majore = ?, prix_kilometre = ?, tarif_repas = ?, assurance_habitation = ?, assurance_auto = ?, piece_identite = ?, attestation_secu = ?, justificatif_domicile = ?, diplome = ?, numero_aggrement = ?, date_aggrement = ?, places_maxi = ?, where idnannies = ?`,
      [
        nannies.users_idusers,
        nannies.notes,
        nannies.photos,
        nannies.tarif_horaire,
        nannies.nom_annonce,
        nannies.adress_garde,
        nannies.photo_profil,
        nannies.presentation,
        nannies.psc1,
        nannies.pedagogie,
        nannies.niveau_diplome,
        nannies.experience,
        nannies.hygiene,
        nannies.heures_sup,
        nannies.tarif_majore,
        nannies.prix_kilometre,
        nannies.tarif_repas,
        nannies.assurance_habitation,
        nannies.assurance_auto,
        nannies.piece_identite,
        nannies.attestation_secu,
        nannies.justificatif_domicile,
        nannies.diplome,
        nannies.numero_aggrement,
        nannies.date_aggrement,
        nannies.places_maxi,
        nannies.idnannies,
      ]
    );
  }
}

module.exports = NanniesManager;
