// comment out import for DB that will not be used
const noSqlDb = require("../database/mongoDb/index.js");
// const sqlDb = require("../database/postgres/index.js");

// uncomment below through line 27 for noSQL
module.exports = {
  create: {
    thing: async (thingToSave) => await noSqlDb.create(thingToSave),
  },
  read: {
    thing: async (thing) => await noSqlDb.find({ id: thing.id }),
    things: async () => await noSqlDb.find(),
  },
  update: {
    thing: async (newThing) =>
      await noSqlDb.findOneAndUpdate({ id: newThing.id }, newThing, {
        new: true,
      }),
  },
  delete: {
    thing: async (thingToDelete) =>
      await noSqlDb.deleteOne({ id: thingToDelete.id }),
  },
};

// uncomment below for SQL
// module.exports = {
//   create: {
//     thing: async (thingToSave) => await sqlDb.create(thingToSave),
//   },
//   read: {
//     thing: async (id) => await sqlDb.findOne({ id: id }),
//     things: async () => await sqlDb.findAll(),
//   },
//   update: {
//     thing: async (newThing) =>
//       await sqlDb.update(newThing, {
//         where: {
//           id: newThing.id,
//         },
//       }),
//   },
//   delete: {
//     thing: async (thingToDelete) =>
//       await sqlDb.destroy({
//         where: { id: thingToDelete.id },
//       }),
//   },
// };
