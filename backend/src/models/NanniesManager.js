const AbstractManager = require("./AbstractManager");

class NanniesManager extends AbstractManager {
  constructor() {
    super({ table: "nannies" });
  }

  insert(nannies) {
    return this.database.query(
      `insert into ${this.table} (users_idusers,ranking,pictures,hourly_rate,ad_name,custody_address,profile_picture,presentation,psc1,pedagogy,degree_level,experience,hygiene,overtime,tariff_major,price_kilometre,meal_price,home_insurance,car_insurance,id,secu_certificate,proof_of_residence,diploma,aggregation_number,date_agreement,places_max) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        nannies.usersIdusers,
        nannies.ranking,
        nannies.pictures,
        nannies.hourlyRate,
        nannies.adName,
        nannies.custodyAddress,
        nannies.profilePicture,
        nannies.presentation,
        nannies.psc1,
        nannies.pedagogy,
        nannies.degreeLevel,
        nannies.experience,
        nannies.hygiene,
        nannies.overtime,
        nannies.tariffMajor,
        nannies.priceKilometre,
        nannies.mealPrice,
        nannies.homeInsurance,
        nannies.carInsurance,
        nannies.id,
        nannies.secuCertificate,
        nannies.proofOfResidence,
        nannies.diploma,
        nannies.aggregationNumber,
        nannies.dateAgreement,
        nannies.placesMax,
      ]
    );
  }

  findNannyByUserId(id) {
    return this.database.query(
      `SELECT nannies.idnannies, users.email, users.phone, nannies.users_idusers FROM ${this.table} JOIN users ON nannies.users_idusers = users.idusers WHERE nannies.idnannies = ?`,
      [id]
    );
  }

  update(nannies) {
    const sql = [];
    const data = Object.keys(nannies)
      .slice(0, -1)
      .map((elem) => {
        sql.push(
          `${elem.replace(
            /[A-Z]/g,
            (letter) => `_${letter.toLowerCase()}`
          )} = ?`
        );
        return nannies[elem];
      });

    return this.database.query(
      `update ${this.table} set ${sql.join(",")} where idnannies = ?`,
      [...data, nannies.idnannies]
    );
  }
}

module.exports = NanniesManager;
