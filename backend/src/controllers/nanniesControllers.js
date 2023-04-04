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
  let nanniesAll = null;
  const idnannies = parseInt(req.params.id, 10);
  if (!req.files?.pictures && !req.files?.profilePicture) {
    nanniesAll = { ...nannies, idnannies };
  } else if (!req.files.pictures && req.files.profilePicture) {
    const profilePicture = req.files.profilePicture[0].filename;
    nanniesAll = { ...nannies, profilePicture, idnannies };
  } else if (!req.files?.profilePicture && req.files.pictures) {
    const pictures = req.files.pictures[0].filename;
    nanniesAll = { ...nannies, pictures, idnannies };
  } else if (req.files?.id) {
    nanniesAll = {
      nannies,
      id: req.files.id[0].filename,
      secuCertificate: req.files.profilePicture[0].filename,
      proofOfResidence: req.files.proofOfResidence[0].filename,
      diploma: req.files.diploma[0].filename,
      homeInsurance: req.files.homeInsurance[0].filename,
      carInsurance: req.files.carInsurance[0].filename,
    };
  }

  // TODO validations (length, format...)

  return models.nannies
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

const getNannyByIdUser = (req, res) => {
  models.nannies
    .findNannyByUserId(req.params.id)
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
  getNannyByIdUser,
};
