const models = require("../models");

const read = (req, res) => {
  models.servicesNounous
    .findAllServicesByNanny(req.params.id)
    .then(([rows]) => {
      if (rows == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { read };
