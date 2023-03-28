const AbstractManager = require("./AbstractManager");

class ServicesNounousManager extends AbstractManager {
  constructor() {
    super({ table: "nannies" });
  }

  findAllServicesByNanny(id) {
    return this.database.query(
      `SELECT nannies.idnannies, nannies_has_services.services_idservices, services.serviceName, services.idservices
      FROM ${this.table}
      JOIN nannies_has_services
      ON nannies_has_services.nannies_idnannies = nannies.idnannies
      JOIN services
      ON  services.idservices =nannies_has_services.services_idservices
      WHERE nannies.idnannies = ?
      `,
      [id]
    );
  }

  insert(item) {
    return this.database.query(
      `insert into ${this.table} (nannies_idnannies, nannies_users_idusers, services_idservices) values (?)`,
      [item.idnannies, item.idusers, item.services]
    );
  }
}

module.exports = ServicesNounousManager;
