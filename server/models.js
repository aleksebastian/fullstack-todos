// comment out import for DB that will not be used
// const noSqlDb = require("../database/mongoDb/index.js");
const sqlDb = require("../database/postgres/index.js");

// uncomment for noSQL
// module.exports = {
//   create: {
//     something: async (thingToSave) =>
//       await noSqlDb.create({ something: thingToSave }),
//   },
//   read: {
//     something: async (thing) => await noSqlDb.find({ something: thing }),
//     somethings: async () => await noSqlDb.find(),
//   },
//   update: {
//     something: async (oldThing, newThing) =>
//       await noSqlDb.findOneAndUpdate(
//         { something: oldThing },
//         { something: newThing },
//         { new: true }
//       ),
//   },
//   delete: {
//     something: async (thingToDelete) =>
//       await noSqlDb.deleteOne({ something: thingToDelete }),
//   },
// };

// uncomment for SQL
module.exports = {
  create: {
    something: async (thingToSave) =>
      await sqlDb.create({ something: thingToSave }),
  },
  read: {
    something: async (thing) => await sqlDb.findOne({ something: thing }),
    somethings: async () => await sqlDb.findAll(),
  },
  update: {
    something: async (oldThing, newThing) =>
      await sqlDb.update(
        {
          something: newThing,
        },
        {
          where: {
            something: oldThing,
          },
        }
      ),
  },
  delete: {
    something: async (thingToDelete) =>
      await sqlDb.destroy({ where: { something: thingToDelete } }),
  },
};
