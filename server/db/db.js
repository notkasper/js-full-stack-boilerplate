const Sequelize = require("sequelize");

let connection;

const credentials = {
  DB_USERNAME: "postgres",
  DB_PASSWORD: "password",
  DB_HOST: "localhost",
  DB_NAME: "hvs"
};

const init = async () => {
  console.log(process.env.DB_USERNAME)
  connection = new Sequelize(
    credentials.DB_NAME,
    credentials.DB_USERNAME,
    credentials.DB_PASSWORD,
    {
      host: "0.0.0.0",
      dialect: "postgres"
    }
  );

  try {
    await connection.authenticate();
  } catch (error) {
    console.error(error);
    console.error("gaat helemaal fout");
  }
};

const getConnection = () => connection;

module.exports = {
  init,
  getConnection
};
