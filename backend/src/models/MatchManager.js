const AbstractManager = require("./AbstractManager");

// ${this.table}.idslots, ${this.table}.beginning_hour, ${this.table}.end_time, ${this.table}.place_number, ${this.table}.nannies_idnannies, ${this.table}.nannies_users_idusers

class MatchManager extends AbstractManager {
  constructor() {
    super({ table: "slots" });
  }

  findAllSlotsInfo() {
    return this.database
      .query(`SELECT slots.idslots, slots.beginning_hour, slots.end_time, slots.place_number, users.firstname, users.lastname, users.adress, users.phone, nannies.ranking, nannies.pictures, nannies.hourly_rate, nannies.ad_name, nannies.custody_address, nannies.profile_picture, nannies.presentation, nannies.psc1, nannies.pedagogy, nannies.degree_level, nannies.experience, nannies.hygiene, nannies.overtime, nannies.tariff_major, nannies.price_kilometre, nannies.meal_price, nannies.home_insurance, nannies.car_insurance, nannies.id, nannies.secu_certificate, nannies.proof_of_residence, nannies.diploma, nannies.aggregation_number, nannies.places_max, nannies.date_agreement, users.idusers, nannies.idnannies 
    FROM ${this.table}
    JOIN nannies
    ON nannies.idnannies = slots.nannies_idnannies
    JOIN users
    ON  slots.nannies_users_idusers =users.idusers
    `);
  }
}

module.exports = MatchManager;
