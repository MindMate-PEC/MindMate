const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// (async () => {
//   try {
//     await sequelize.sync({ alter: true }); // Use `alter` for non-destructive updates
//     console.log("Database & tables synced successfully!");
//   } catch (error) {
//     console.error("Error syncing database models:", error.message);
//   }
// })();


// Import models
db.User = require("./User")(sequelize, Sequelize);
db.Notes = require("./Notes")(sequelize, Sequelize);

// Sync models


module.exports = db;
