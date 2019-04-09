const Sequelize = require("sequelize");

let connection;

const init = async () => {
  connection = new Sequelize("hvs", "hvs", "hvs", {
    host: "localhost",
    dialect: "postgres"
  });

  try {
    await connection.authenticate();
  } catch (error) {
    console.error(error);
    console.error("gaat helemaal fout")
  }
};

const getConnection = () => connection;

module.exports = {
  init,
  getConnection
};
