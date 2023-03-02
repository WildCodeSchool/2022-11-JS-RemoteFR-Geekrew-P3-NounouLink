const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const slotsControllers = require("./controllers/slotsControllers");
const childrenControllers = require("./controllers/childrenControllers");
const favoritesControllers = require("./controllers/favoritesControllers");
const nanniesControllers = require("./controllers/nanniesControllers");
const parentsControllers = require("./controllers/parentsControllers");
const reservationsControllers = require("./controllers/reservationsControllers");
const servicesControllers = require("./controllers/servicesControllers");
const superusersControllers = require("./controllers/superusersControllers");
const usersControllers = require("./controllers/usersControllers");
const { hashPassword, verifyPassword } = require("./auth");

router.post(
  "/login",
  usersControllers.getUserByEmailAndPasswordAndNext,
  verifyPassword
);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/creneaux", slotsControllers.browse);
router.get("/creneaux/:id", slotsControllers.read);
router.put("/creneaux/:id", slotsControllers.edit);
router.post("/creneaux", slotsControllers.add);
router.delete("/creneaux/:id", slotsControllers.destroy);

router.get("/enfants", childrenControllers.browse);
router.get("/enfants/:id", childrenControllers.read);
router.put("/enfants/:id", childrenControllers.edit);
router.post("/enfants", childrenControllers.add);
router.delete("/enfants/:id", childrenControllers.destroy);

router.get("/favoris", favoritesControllers.browse);
router.get("/favoris/:id", favoritesControllers.read);
router.put("/favoris/:id", favoritesControllers.edit);
router.post("/favoris", favoritesControllers.add);
router.delete("/favoris/:id", favoritesControllers.destroy);

router.get("/nounous", nanniesControllers.browse);
router.get("/nounous/:id", nanniesControllers.read);
router.put("/nounous/:id", nanniesControllers.edit);
router.post("/nounous", nanniesControllers.add);
router.delete("/nounous/:id", nanniesControllers.destroy);

router.get("/parents", parentsControllers.browse);
router.get("/parents/:id", parentsControllers.read);
router.put("/parents/:id", parentsControllers.edit);
router.post("/parents", parentsControllers.add);
router.delete("/parents/:id", parentsControllers.destroy);

router.get("/reservations", reservationsControllers.browse);
router.get("/reservations/:id", reservationsControllers.read);
router.put("/reservations/:id", reservationsControllers.edit);
router.post("/reservations", reservationsControllers.add);
router.delete("/reservations/:id", reservationsControllers.destroy);

router.get("/services", servicesControllers.browse);
router.get("/services/:id", servicesControllers.read);
router.put("/services/:id", servicesControllers.edit);
router.post("/services", servicesControllers.add);
router.delete("/services/:id", servicesControllers.destroy);

router.get("/superutilisateurs", superusersControllers.browse);
router.get("/superutilisateurs/:id", superusersControllers.read);
router.put("/superutilisateurs/:id", superusersControllers.edit);
router.post("/superutilisateurs", superusersControllers.add);
router.delete("/superutilisateurs/:id", superusersControllers.destroy);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", hashPassword, usersControllers.edit);
router.post("/users", hashPassword, usersControllers.add);
router.delete("/users/:id", hashPassword, usersControllers.destroy);

module.exports = router;
