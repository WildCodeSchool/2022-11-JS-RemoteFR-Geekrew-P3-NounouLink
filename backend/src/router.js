const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const crenauxControllers = require("./controllers/crenauxControllers");
const enfantsControllers = require("./controllers/enfantsControllers");
const favorisControllers = require("./controllers/favorisControllers");
const nounousControllers = require("./controllers/nounousControllers");
const parentsControllers = require("./controllers/parentsControllers");
const reservationsControllers = require("./controllers/reservationsControllers");
const servicesControllers = require("./controllers/servicesControllers");
const superutilisateurControllers = require("./controllers/superutilisateurControllers");
const userControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/crenaux", crenauxControllers.browse);
router.get("/crenaux/:id", crenauxControllers.read);
router.put("/crenaux/:id", crenauxControllers.edit);
router.post("/crenaux", crenauxControllers.add);
router.delete("/crenaux/:id", crenauxControllers.destroy);

router.get("/enfants", enfantsControllers.browse);
router.get("/enfants/:id", enfantsControllers.read);
router.put("/enfants/:id", enfantsControllers.edit);
router.post("/enfants", enfantsControllers.add);
router.delete("/enfants/:id", enfantsControllers.destroy);

router.get("/favoris", favorisControllers.browse);
router.get("/favoris/:id", favorisControllers.read);
router.put("/favoris/:id", favorisControllers.edit);
router.post("/favoris", favorisControllers.add);
router.delete("/favoris/:id", favorisControllers.destroy);

router.get("/nounous", nounousControllers.browse);
router.get("/nounous/:id", nounousControllers.read);
router.put("/nounous/:id", nounousControllers.edit);
router.post("/nounous", nounousControllers.add);
router.delete("/nounous/:id", nounousControllers.destroy);

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

router.get("/superutilisateurs", superutilisateurControllers.browse);
router.get("/superutilisateurs/:id", superutilisateurControllers.read);
router.put("/superutilisateurs/:id", superutilisateurControllers.edit);
router.post("/superutilisateurs", superutilisateurControllers.add);
router.delete("/superutilisateurs/:id", superutilisateurControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

module.exports = router;
