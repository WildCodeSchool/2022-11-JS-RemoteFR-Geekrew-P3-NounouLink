const models = require("../models");

const browse = (req, res) => {
  models.servicesNounous
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
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

const add = (req, res) => {
  const item = req.body;

  item.map((i) => Object.values(i));

  // TODO validations (length, format...)

  models.servicesNounous
    .insert([item.map((i) => Object.values(i))])
    .then(([result]) => {
      res.location(`/servicesnounous/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const services = req.body;

  // TODO validations (length, format...)

  services.id = parseInt(req.params.id, 10);

  models.servicesNounous
    .update(services)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse, read, add, edit };
