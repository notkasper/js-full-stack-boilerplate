const Sequelize = require("sequelize");

let connection;

const init = () => {
    connection = new Sequelize('database', 'username', 'password', {
        host: 'localhost',
        dialect: 'postgres'
      });
}

const getConnection = () => connection;

module.exports = {
  init,
  getConnection
}