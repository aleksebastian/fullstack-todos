require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

// Set logging to true to debug db
const sequelize = new Sequelize({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
  dialect: "postgres",
  logging: false,
});

const Thing = sequelize.define("things", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

const sync = async () => await Thing.sync();

sync();

module.exports = Thing;

// Uncomment to test postgres connection on server start
// const testConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//     // process.exit();
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
// testConnection();
