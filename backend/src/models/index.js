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

const SuperusersManager = require("./SuperusersManager");

models.superusers = new SuperusersManager();
models.superusers.setDatabase(pool);

const UsersManager = require("./UsersManager");

models.users = new UsersManager();
models.users.setDatabase(pool);

const NanniesManager = require("./NanniesManager");

models.nannies = new NanniesManager();
models.nannies.setDatabase(pool);

const ParentsManager = require("./ParentsManager");

models.parents = new ParentsManager();
models.parents.setDatabase(pool);

const ChildrenManager = require("./ChildrenManager");

models.children = new ChildrenManager();
models.children.setDatabase(pool);

const ReservationsManager = require("./ReservationsManager");

models.reservations = new ReservationsManager();
models.reservations.setDatabase(pool);

const FavoritesManager = require("./FavoritesManager");

models.favorites = new FavoritesManager();
models.favorites.setDatabase(pool);

const SlotsManager = require("./SlotsManager");

models.slots = new SlotsManager();
models.slots.setDatabase(pool);

const ServicesManager = require("./ServicesManager");

models.services = new ServicesManager();
models.services.setDatabase(pool);

const MatchManager = require("./MatchManager");

models.match = new MatchManager();
models.match.setDatabase(pool);

const ServicesNounousManager = require("./ServicesNounousManager");

models.servicesNounous = new ServicesNounousManager();
models.servicesNounous.setDatabase(pool);

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

// export models

module.exports = new Proxy(models, handler);
