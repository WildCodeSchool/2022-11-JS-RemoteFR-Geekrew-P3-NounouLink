const AbstractManager = require("./AbstractManager");

class ServicesManager extends AbstractManager {
  constructor() {
    super({ table: "services" });
  }

  insert(services) {
    return this.database.query(
      `insert into ${this.table} (idservices, serviceName) values (?, ?)`,
      [services.idservices, services.serviceName]
    );
  }

  update(services) {
    return this.database.query(
      `update ${this.table} set serviceName = ? where idservices = ?`,
      [services.serviceName, services.idservices]
    );
  }
}

module.exports = ServicesManager;
