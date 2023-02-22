const AbstractManager = require("./AbstractManager");

class NounousManager extends AbstractManager {
  constructor() {
    super({ table: "nounous" });
  }

  insert(nounous) {
    return this.database.query(
      `insert into ${this.table} (users_iduser,notes,photos,tarif_horaire,nom_annonce,adresse_garde,photo_profil,presentation,psc1,pedagogie,niveau_diplome,experience,hygiene,heures_sup,tarif_majore,prix_kilometre,tarif_repas,assurance_habitation,assurance_auto,piece_identite,attestation_secu,justificatif_domicile,diplome,numero_aggrement,date_aggrement,places_maxi) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        nounous.users_iduser,
        nounous.notes,
        nounous.photos,
        nounous.tarif_horaire,
        nounous.nom_annonce,
        nounous.adress_garde,
        nounous.photo_profil,
        nounous.presentation,
        nounous.psc1,
        nounous.pedagogie,
        nounous.niveau_diplome,
        nounous.experience,
        nounous.hygiene,
        nounous.heures_sup,
        nounous.tarif_majore,
        nounous.prix_kilometre,
        nounous.tarif_repas,
        nounous.assurance_habitation,
        nounous.assurance_auto,
        nounous.piece_identite,
        nounous.attestation_secu,
        nounous.justificatif_domicile,
        nounous.diplome,
        nounous.numero_aggrement,
        nounous.date_aggrement,
        nounous.places_maxi,
      ]
    );
  }

  update(nounous) {
    return this.database.query(
      `update ${this.table} set users_iduser = ?, notes = ?, photos = ?, tarif_horaire = ?, nom_annonce = ?, adress_garde = ?, photo_profil = ?, presentation = ?, psc1 = ?, pedagogie = ?, niveau_diplome = ?, experience = ?, hygiene = ?, heures_supp = ?, tarif_majore = ?, prix_kilometre = ?, tarif_repas = ?, assurance_habitation = ?, assurance_auto = ?, piece_identite = ?, attestation_secu = ?, justificatif_domicile = ?, diplome = ?, numero_aggrement = ?, date_aggrement = ?, places_maxi = ?, where idnounou = ?`,
      [
        nounous.users_iduser,
        nounous.notes,
        nounous.photos,
        nounous.tarif_horaire,
        nounous.nom_annonce,
        nounous.adress_garde,
        nounous.photo_profil,
        nounous.presentation,
        nounous.psc1,
        nounous.pedagogie,
        nounous.niveau_diplome,
        nounous.experience,
        nounous.hygiene,
        nounous.heures_sup,
        nounous.tarif_majore,
        nounous.prix_kilometre,
        nounous.tarif_repas,
        nounous.assurance_habitation,
        nounous.assurance_auto,
        nounous.piece_identite,
        nounous.attestation_secu,
        nounous.justificatif_domicile,
        nounous.diplome,
        nounous.numero_aggrement,
        nounous.date_aggrement,
        nounous.places_maxi,
        nounous.idnounou,
      ]
    );
  }
}

module.exports = NounousManager;
