const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (idusers, firstname, lastname, kind
, email, adress, phone, password) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        users.idusers,
        users.firstname,
        users.lastname,
        users.kind,
        users.email,
        users.adress,
        users.phone,
        users.password,
      ]
    );
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, kind
 = ?, email = ?, adress = ?, phone = ?, password = ? where idusers = ?`,
      [
        users.firstname,
        users.lastname,
        users.kind,
        users.email,
        users.adress,
        users.phone,
        users.password,
        users.idusers,
      ]
    );
  }
}

module.exports = UsersManager;
