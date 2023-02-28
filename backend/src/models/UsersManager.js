const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
<<<<<<< HEAD
      `insert into ${this.table} (firstname, lastname, type, email, adress, phone, password) values (?, ?, ?, ?, ?, ?, ?)`,
      [
=======
      `insert into ${this.table} (idusers, firstname, lastname, type, email, adress, phone, password) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        users.idusers,
>>>>>>> ccba2e19817bcf54736cae3d4442b255da763473
        users.firstname,
        users.lastname,
        users.type,
        users.email,
        users.adress,
        users.phone,
        users.password,
      ]
    );
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, type = ?, email = ?, adress = ?, phone = ?, password = ? where idusers = ?`,
      [
        users.firstname,
        users.lastname,
        users.type,
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
