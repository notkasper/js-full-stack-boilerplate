const Sequelize = require("sequelize");

const sequelize = new Sequelize("hvs", "hvs", "hvs", {
  host: process.env.DB_HOST || "localhost",
  port: "5432",
  dialect: "postgres",
  logging: true
});

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected to Postgres.");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  init,
  sequelize
};
