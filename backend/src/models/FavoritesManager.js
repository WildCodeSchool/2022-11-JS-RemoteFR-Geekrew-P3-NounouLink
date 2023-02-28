const AbstractManager = require("./AbstractManager");

class FavoritesManager extends AbstractManager {
  constructor() {
    super({ table: "favorites" });
  }

  insert(favorites) {
    return this.database.query(
      `insert into ${this.table} (parents_idparents, parents_users_idusers, nannies_idnannies, nannies_users_idusers) values (?,?,?,?)`,
      [
        favorites.parents_idparents,
        favorites.parents_users_idusers,
        favorites.nannies_idnannies,
        favorites.nannies_users_idusers,
      ]
    );
  }

  update(favorites) {
    return this.database.query(
      `update ${this.table} set parents_idparents = ?, parents_users_idusers = ?, nannies_idnannies = ?, nannies_users_idusers= ? , where idfavorites = ?`,
      [
        favorites.parents_idparents,
        favorites.parents_users_idusers,
        favorites.nannies_idnannies,
        favorites.nannies_users_idusers,
        favorites.idfavorites,
      ]
    );
  }
}

module.exports = FavoritesManager;
