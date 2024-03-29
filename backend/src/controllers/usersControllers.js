const models = require("../models");
const validateUsers = require("../validator/usersValidator");

const browse = (req, res) => {
  models.users
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
  models.users
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
  const users = req.body;

  users.idusers = parseInt(req.params.id, 10);
  return models.users
    .update(users)
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

const editPhone = (req, res) => {
  const user = req.body;
  // TODO validations (length, format...)
  user.idusers = parseInt(req.params.id, 10);
  return models.users.updateNannyPhone(user).then(([result]) => {
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204).catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    }
  });
};

const getUserByEmailAndPasswordAndNext = (req, res, next) => {
  models.users
    .login(req.body.email)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        [req.users] = rows;
        models.users.findkind(req.users.idusers).then(([row]) => {
          if (row[0] == null) {
            res.sendStatus(404);
          } else {
            [req.users] = row;
            next();
          }
        });
      }
    })

    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const users = req.body;
  // TODO validations (length, format...)
  const validationResult = validateUsers(users);

  if (validationResult.length) {
    return res.status(400).send(validationResult);
  }
  return models.users
    .insert(users)
    .then(([result]) => {
      res.status(201).send({ userId: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.users
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
const getEmail = (req, res) => {
  models.users
    .getUserByEmail(req.params.email)
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

module.exports = {
  browse,
  read,
  edit,
  editPhone,
  add,
  destroy,
  getUserByEmailAndPasswordAndNext,
  getEmail,
};
