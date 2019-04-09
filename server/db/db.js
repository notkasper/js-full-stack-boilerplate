const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST || "localhost",
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  }
);

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
