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
  } catch (error) {
    console.log(`Error while authenticating Sequelize with Postgres: ${error}`);
    process.exit(1);
  }

  try {
    await sequelize.sync();
  } catch (error) {
    console.error(`Error while syncing Sequelize with Postgres: ${error}`);
    process.exit(1);
  }
};

module.exports = {
  init,
  sequelize
};
