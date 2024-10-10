const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    dialect: "postgres",
    logging: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User")(sequelize, Sequelize);
db.Notes = require("./Notes")(sequelize, Sequelize);

module.exports = db;