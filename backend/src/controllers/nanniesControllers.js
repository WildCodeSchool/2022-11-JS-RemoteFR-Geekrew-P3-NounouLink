const models = require("../models");

const browse = (req, res) => {
  models.nannies
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
  models.nannies
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const nannies = req.body;
  const idnannies = parseInt(req.params.id, 10);
  const profilePicture = req.files.profilePicNanny[0].filename;
  const nanniesAll = { ...nannies, profilePicture, idnannies };

  // TODO validations (length, format...)

  models.nannies
    .update(nanniesAll)
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

const add = (req, res) => {
  const nannies = { usersIdusers: req.body.userId };

  // TODO validations (length, format...)

  models.nannies
    .insert(nannies)
    .then(([result]) => {
      res.status(201).send({ nannyId: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.nannies
    .delete(req.params.id)
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

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
