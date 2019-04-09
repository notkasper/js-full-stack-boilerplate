const Sequelize = require("sequelize");

console.log(process.env.DB_HOST || "localhost")
console.log(process.env.DB_HOST || "localhost")
console.log(process.env.DB_HOST || "localhost")
console.log(process.env.DB_HOST || "localhost")
console.log(process.env.DB_HOST || "localhost")
console.log(process.env.DB_HOST || "localhost")
console.log(process.env.DB_HOST || "localhost")

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
    console.error("gaat helemaal fout");
  }
};

module.exports = {
  init,
  sequelize
};
