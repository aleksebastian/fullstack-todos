require("dotenv").config();
const pgtools = require("pgtools");

const config = {
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
};

const createDb = async () => {
  try {
    const createDbRes = await pgtools.createdb(config, process.env.DBNAME);
    console.log(createDbRes);
    return;
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
};

const dropDb = async () => {
  try {
    const dropDbRes = await pgtools.dropdb(config, process.env.DBNAME);
    console.log(dropDbRes);
    return;
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
};

const reCreateDb = async () => {
  const drop = await dropDb();
  const create = await createDb();
  return;
};

// createDb();
// Drop previously created db and create a new one by commenting the function above and uncommenting the function below before running createSqlDb. Use with caution.
reCreateDb();
