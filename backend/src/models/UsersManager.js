const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} ( firstname, lastname, kind, email, adress, phone, hashedPassword) values (?, ?, ?, ?, ?, ?, ?)`,
      [
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

  findkind(iduser) {
    return this.database.query(
      ` SELECT * FROM users LEFT JOIN parents ON parents.users_idusers = users.idusers LEFT JOIN nannies ON nannies.users_idusers = users.idusers  WHERE idusers = ?`,
      [iduser]
    );
  }

  login(email) {
    return this.database.query(
      `select email, idusers from ${this.table} where email = ?`,
      [email]
    );
  }

  update(users) {
    const sql = [];

    const data = Object.keys(users)
      .slice(0, -1)
      .map((elem) => {
        sql.push(`${elem} = ?`);
        return users[elem];
      });

    return this.database.query(
      `update ${this.table} set ${sql.join(",")} where idusers = ?`,
      [...data, users.idusers]
    );
  }

  getUserByEmail(email) {
    return this.database.query(
      `SELECT idusers from ${this.table} WHERE email = ?`,
      [email]
    );
  }
}

module.exports = UsersManager;
