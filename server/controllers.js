const db = require("./models");

module.exports = {
  error: (req, res) => res.sendStatus(400),
  get: async (req, res) => {
    const { thingToGet } = req.params;
    if (!thingToGet) {
      try {
        const things = await db.read.somethings();
        res.json(things);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
    } else {
      try {
        const thing = await db.read.something(thingToGet);
        res.json(thing);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
    }
  },
  post: async (req, res) => {
    const thingToSave = req.body.thingToSave;
    if (!thingToSave) {
      res.sendStatus(400);
    } else {
      try {
        await db.create.something(thingToSave);
        res.sendStatus(201);
      } catch (err) {
        console.error("Unable to save thing: ", err);
        res.sendStatus(500);
      }
    }
  },
  put: async (req, res) => {
    const oldThing = req.body.oldThing;
    const newThing = req.body.newThing;
    try {
      let updateThing = await db.update.something(oldThing, newThing);
      if (updateThing.something === newThing) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    } catch (err) {
      console.error("Unable to update thing: ", err);
      res.sendStatus(500);
    }
  },
  delete: async (req, res) => {
    const thingToDelete = req.body.thingToDelete;
    try {
      let deleteThing = await db.delete.something(thingToDelete);
      if (deleteThing.deletedCount) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error("Unable to delete thing: ", err);
      res.sendStatus(500);
    }
  },
};
