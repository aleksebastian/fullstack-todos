require("dotenv").config();
const pgtools = require("pgtools");

const config = {
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
};

pgtools.createdb(config, process.env.DBNAME).then((err, res) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});

// Comment function above and uncomment function below to drop database when running createSqlDb
// pgtools.dropdb(config, process.env.DBNAME).then((err, res) => {
//   if (err) {
//     console.error(err);
//     process.exit(-1);
//   }
//   console.log(res);
// });
