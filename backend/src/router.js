const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const slotsControllers = require("./controllers/slotsControllers");
const childrenControllers = require("./controllers/childrenControllers");
const favoritesControllers = require("./controllers/favoritesControllers");
const nanniesControllers = require("./controllers/nanniesControllers");
const parentsControllers = require("./controllers/parentsControllers");
const reservationsControllers = require("./controllers/reservationsControllers");
const servicesControllers = require("./controllers/servicesControllers");
const superusersControllers = require("./controllers/superusersControllers");
const usersControllers = require("./controllers/usersControllers");
const { hashPassword, verifyPassword, verifyToken } = require("./auth");
const matchControllers = require("./controllers/matchControllers");
const fileUpload = require("./middleware/multer");
const servicesNounousControllers = require("./controllers/servicesNounousControllers");

// the public routes
router.post(
  "/login",
  usersControllers.getUserByEmailAndPasswordAndNext,
  verifyPassword
);
router.post("/users", hashPassword, usersControllers.add);
router.post("/parents", verifyToken, parentsControllers.add);
router.post("/enfants", verifyToken, fileUpload, childrenControllers.add);
router.post("/nounous", verifyToken, nanniesControllers.add);
router.post("/superutilisateurs", verifyToken, superusersControllers.add);

// then the routes to protect

router.get("/creneaux", verifyToken, slotsControllers.browse);
router.get("/creneaux/:id", verifyToken, slotsControllers.read);
router.put("/creneaux/:id", verifyToken, slotsControllers.edit);
router.post("/creneaux", verifyToken, slotsControllers.add);
router.delete("/creneaux/:id", verifyToken, slotsControllers.destroy);

router.get("/enfants", verifyToken, childrenControllers.browse);
router.get("/enfants/:id", verifyToken, childrenControllers.read);
router.put("/enfants/:id", verifyToken, childrenControllers.edit);
router.delete("/enfants/:id", verifyToken, childrenControllers.destroy);

router.get("/favoris", verifyToken, favoritesControllers.browse);
router.get("/favoris/:id", verifyToken, favoritesControllers.read);
router.put("/favoris/:id", verifyToken, favoritesControllers.edit);
router.post("/favoris", verifyToken, favoritesControllers.add);
router.delete("/favoris/:id", verifyToken, favoritesControllers.destroy);

router.get("/nounous", verifyToken, nanniesControllers.browse);
router.get("/nounous/:id", verifyToken, nanniesControllers.read);
router.put("/nounous/:id", verifyToken, fileUpload, nanniesControllers.edit);

router.delete("/nounous/:id", verifyToken, nanniesControllers.destroy);

router.get("/parents", verifyToken, parentsControllers.browse);
router.get("/parents/:id", verifyToken, parentsControllers.read);
router.put("/parents/:id", verifyToken, parentsControllers.edit);
router.delete("/parents/:id", verifyToken, parentsControllers.destroy);

router.get("/reservations", verifyToken, reservationsControllers.browse);
router.get("/reservations/:id", verifyToken, reservationsControllers.read);
router.put("/reservations/:id", verifyToken, reservationsControllers.edit);
router.post("/reservations", verifyToken, reservationsControllers.add);
router.delete(
  "/reservations/:id",
  verifyToken,
  reservationsControllers.destroy
);

router.get("/services", verifyToken, servicesControllers.browse);
router.get("/services/:id", verifyToken, servicesControllers.read);
router.put("/services/:id", verifyToken, servicesControllers.edit);
router.post("/services", verifyToken, servicesControllers.add);
router.delete("/services/:id", verifyToken, servicesControllers.destroy);

router.get("/superutilisateurs", verifyToken, superusersControllers.browse);
router.get("/superutilisateurs/:id", verifyToken, superusersControllers.read);
router.put("/superutilisateurs/:id", verifyToken, superusersControllers.edit);

router.delete(
  "/superutilisateurs/:id",
  verifyToken,
  superusersControllers.destroy
);

router.get("/users", verifyToken, usersControllers.browse);
router.get("/users/:id", verifyToken, usersControllers.read);
router.put("/users/:id", verifyToken, usersControllers.edit);
router.delete("/users/:id", verifyToken, usersControllers.destroy);
router.get("/match", verifyToken, matchControllers.browse);
router.get("/servicesnounous/:id", servicesNounousControllers.read);
router.get("/servicesnounous/", servicesNounousControllers.browse);
router.post("/servicesnounous/", servicesNounousControllers.add);
router.put("/servicesnounous/:id", servicesNounousControllers.edit);

module.exports = router;
