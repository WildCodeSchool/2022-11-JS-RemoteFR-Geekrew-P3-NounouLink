const models = require("../models");

const browse = (req, res) => {
  models.match
    .findAllSlotsInfo()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse };
