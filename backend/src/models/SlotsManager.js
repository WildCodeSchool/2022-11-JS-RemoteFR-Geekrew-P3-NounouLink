const AbstractManager = require("./AbstractManager");

class SlotsManager extends AbstractManager {
  constructor() {
    super({ table: "slots" });
  }

  insert(slots) {
    return this.database.query(
      `insert into ${this.table} ( nannies_idnannies, nannies_users_idusers, caption_day
, beginning_hour
, end_time
, place_number
) values (?, ?, ?, ?, ?, ?)`,
      [
        slots.nannies_idnannies,
        slots.nannies_users_idusers,
        slots.caption_day,
        slots.beginning_hour,
        slots.end_time,
        slots.place_number,
      ]
    );
  }

  update(slots) {
    return this.database.query(
      `update ${this.table} set idslots = ?, nannies_idnannies = ?, nannies_users_idusers = ?, caption_day
 = ?, beginning_hour
 = ?, end_time
 = ?, place_number
 = ? where idusers = ?`,
      [
        slots.idslots,
        slots.nannies_idnannies,
        slots.nannies_users_idusers,
        slots.caption_day,
        slots.beginning_hour,
        slots.end_time,
        slots.place_number,
        slots.idusers,
      ]
    );
  }
}

module.exports = SlotsManager;
