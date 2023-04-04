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
        slots.nanniesIdnannies,
        slots.nanniesUsersIdusers,
        slots.captionDay,
        slots.beginningHour,
        slots.endTime,
        slots.placeNumber,
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
        slots.nanniesIdnannies,
        slots.nanniesUsersIdusers,
        slots.captionDay,
        slots.beginningHour,
        slots.endTime,
        slots.placeNumber,
        slots.idusers,
      ]
    );
  }
}

module.exports = SlotsManager;
