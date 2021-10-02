const noSqlDb = require("../database/mongoDb/index.js");

module.exports = {
  create: {
    something: async (thingToSave) =>
      await noSqlDb.create({ something: thingToSave }),
  },
  read: {
    something: async (thing) => await noSqlDb.find({ something: thing }),
    somethings: async () => await noSqlDb.find(),
  },
  update: {
    something: async (oldThing, newThing) =>
      await noSqlDb.findOneAndUpdate(
        { something: oldThing },
        { something: newThing },
        { new: true }
      ),
  },
  delete: {
    something: async (thingToDelete) =>
      await noSqlDb.deleteOne({ something: thingToDelete }),
  },
};
