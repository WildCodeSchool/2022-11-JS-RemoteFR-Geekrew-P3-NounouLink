const AbstractManager = require("./AbstractManager");

class NanniesManager extends AbstractManager {
  constructor() {
    super({ table: "nannies" });
  }

  insert(nannies) {
    return this.database.query(
      `insert into ${this.table} (users_idusers,ranking,pictures,hourly_rate,ad_name,adresse_garde,profile_picture,presentation,psc1,pedagogy,degree_level,experience,hygiene,overtime,tariff_major,price_kilometre,meal_price,home_insurance,car_insurance,id,secu_certificate,proof_of_residence,diploma,aggregation_number,date_agreement,places_max) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        nannies.users_idusers,
        nannies.ranking,
        nannies.pictures,
        nannies.hourly_rate,
        nannies.ad_name,
        nannies.custody_address,
        nannies.profile_picture,
        nannies.presentation,
        nannies.psc1,
        nannies.pedagogy,
        nannies.degree_level,
        nannies.experience,
        nannies.hygiene,
        nannies.overtime,
        nannies.tariff_major,
        nannies.price_kilometre,
        nannies.meal_price,
        nannies.home_insurance,
        nannies.car_insurance,
        nannies.id,
        nannies.secu_certificate,
        nannies.proof_of_residence,
        nannies.diploma,
        nannies.aggregation_number,
        nannies.date_agreement,
        nannies.places_max,
      ]
    );
  }

  update(nannies) {
    return this.database.query(
      `update ${this.table} set users_idusers = ?, ranking = ?, pictures = ?, hourly_rate = ?, ad_name = ?, custody_address = ?, profile_picture = ?, presentation = ?, psc1 = ?, pedagogy = ?, degree_level= ?, experience = ?, hygiene = ?, overtime= ?, tariff_major= ?, price_kilometre = ?, meal_price = ?, home_insurance = ?, car_insurance = ?, id = ?, secu_certificate = ?, proof_of_residence = ?, diploma = ?, aggregation_number = ?, date_agreement = ?, places_max = ?, where idnannies = ?`,
      [
        nannies.users_idusers,
        nannies.ranking,
        nannies.pictures,
        nannies.hourly_rate,
        nannies.ad_name,
        nannies.custody_address,
        nannies.profile_picture,
        nannies.presentation,
        nannies.psc1,
        nannies.pedagogy,
        nannies.degree_level,
        nannies.experience,
        nannies.hygiene,
        nannies.overtime,
        nannies.tariff_major,
        nannies.price_kilometre,
        nannies.meal_price,
        nannies.home_insurance,
        nannies.car_insurance,
        nannies.id,
        nannies.secu_certificate,
        nannies.proof_of_residence,
        nannies.diploma,
        nannies.aggregation_number,
        nannies.date_agreement,
        nannies.places_max,
        nannies.idnannies,
      ]
    );
  }
}

module.exports = NanniesManager;
