const AbstractManager = require("./AbstractManager");

class ReservationsManager extends AbstractManager {
  constructor() {
    super({ table: "reservations" });
  }

  insert(reservations) {
    return this.database.query(
      `insert into ${this.table} (parents_idparents,parents_users_idusers,nannies_idnannies,nannies_users_idusers,reservationok,startdate,enddate,children_idchildren,children_parents_idparents,
  children_parents_users_idusers) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        reservations.parentsIdparents,
        reservations.parentsUsersIdusers,
        reservations.nanniesIdnannies,
        reservations.nanniesUsersIdusers,
        reservations.reservationok,
        reservations.startdate,
        reservations.enddate,
        reservations.childrenIdchildren,
        reservations.childrenParentsIdparents,
        reservations.childrenParentsUsersIdusers,
      ]
    );
  }

  update(reservations) {
    const sql = [];
    const data = Object.keys(reservations)
      .slice(0, -1)
      .map((elem) => {
        sql.push(
          `${elem.replace(
            /[A-Z]/g,
            (letter) => `_${letter.toLowerCase()}`
          )} = ?`
        );
        return reservations[elem];
      });

    return this.database.query(
      `update ${this.table} set ${sql.join(",")} where idreservations = ?`,
      [...data, reservations.idreservations]
    );
  }
}

module.exports = ReservationsManager;
