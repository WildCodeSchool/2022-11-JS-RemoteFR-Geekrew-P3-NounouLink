const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (idusers, firstname, lastname, kind
, email, adress, phone, hashedPassword) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        users.idusers,
        users.firstname,
        users.lastname,
        users.kind,
        users.email,
        users.adress,
        users.phone,
        users.hashedPassword,
      ]
    );
  }

  login(email) {
    return this.database.query(
      `select email, hashedPassword from ${this.table} where email = ?`,
      [email]
    );
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, kind
 = ?, email = ?, adress = ?, phone = ?, hashedPassword = ? where idusers = ?`,
      [
        users.firstname,
        users.lastname,
        users.kind,
        users.email,
        users.adress,
        users.phone,
        users.hashedPassword,
        users.idusers,
      ]
    );
  }
}

module.exports = UsersManager;
