const AbstractManager = require("./AbstractManager");

class ReservationsManager extends AbstractManager {
  constructor() {
    super({ table: "reservations" });
  }

  insert(reservations) {
    return this.database.query(
      `insert into ${this.table} (parents_idparents,parents_users_idusers,nannies_idnannies,nannies_users_idusers,reservationok,startdate,enddate,frequence,flexibility) values (?,?,?,?,?,?,?,?,?)`,
      [
        reservations.parentsIdparents,
        reservations.parentsUsersIdusers,
        reservations.nanniesIdnannies,
        reservations.nanniesUsersIdusers,
        reservations.reservationok,
        reservations.startdate,
        reservations.enddate,
        reservations.frequence,
        reservations.flexibility,
      ]
    );
  }

  update(reservations) {
    return this.database.query(
      `update ${this.table} set parents_idparents = ? ,
       parents_users_idusers = ? ,
       nannies_idnannies = ?,
       nannies_users_idusers = ? ,
       reservationok = ?,
       startdate = ?,
       enddate = ?,
       frequence = ?,
       flexibility = ?
       where idreservations = ?`,
      [
        reservations.parentsIdparents,
        reservations.parentsUsersIdusers,
        reservations.nanniesIdnannies,
        reservations.nanniesUsersIdusers,
        reservations.reservationok,
        reservations.startdate,
        reservations.enddate,
        reservations.frequence,
        reservations.flexibility,
        reservations.idreservations,
      ]
    );
  }
}

module.exports = ReservationsManager;
