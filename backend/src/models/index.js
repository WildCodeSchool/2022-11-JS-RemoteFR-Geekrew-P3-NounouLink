require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const ItemManager = require("./ItemManager");

models.item = new ItemManager();
models.item.setDatabase(pool);

const SuperutilisateurManager = require("./SuperutilisateurManager");

models.superutilisateur = new SuperutilisateurManager();
models.superutilisateur.setDatabase(pool);

const UsersManager = require("./UsersManager");

models.users = new UsersManager();
models.users.setDatabase(pool);

const NounousManager = require("./NounousManager");

models.nounous = new NounousManager();
models.nounous.setDatabase(pool);

const ParentsManager = require("./ParentsManager");

models.parents = new ParentsManager();
models.parents.setDatabase(pool);

const EnfantsManager = require("./EnfantsManager");

models.enfants = new EnfantsManager();
models.enfants.setDatabase(pool);

const ReservationsManager = require("./ReservationsManager");

models.reservation = new ReservationsManager();
models.reservation.setDatabase(pool);

const FavorisManager = require("./FavorisManager");

models.favoris = new FavorisManager();
models.favoris.setDatabase(pool);

const CrenauxManager = require("./CrenauxManager");

models.crenaux = new CrenauxManager();
models.crenaux.setDatabase(pool);

const ServicesManager = require("./ServicesManager");

models.services = new ServicesManager();
models.services.setDatabase(pool);

// export models

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
