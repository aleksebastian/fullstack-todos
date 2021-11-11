const db = require("./models");

// conditionals with || (OR) before res.send have || (OR) to accomodate for sql and noSql db use

module.exports = {
  error: (req, res) => res.sendStatus(400),
  get: async (req, res) => {
    const { thingToGet } = req.params;
    if (!thingToGet) {
      try {
        const things = await db.read.things();
        res.json(things);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
    } else {
      try {
        const thing = await db.read.thing(thingToGet);
        res.json(thing);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
    }
  },
  post: async (req, res) => {
    const thingToSave = req.body;
    if (!thingToSave) {
      res.sendStatus(400);
    } else {
      try {
        await db.create.thing(thingToSave);
        res.sendStatus(201);
      } catch (err) {
        console.error("Unable to save thing: ", err);
        res.sendStatus(500);
      }
    }
  },
  put: async (req, res) => {
    const updatedThing = req.body;
    try {
      let updateThing = await db.update.thing(updatedThing);
      if (updateThing.name === updatedThing.name || updateThing[0] === 1) {
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
    const thingToDelete = req.body;
    try {
      let deleteThing = await db.delete.thing(thingToDelete);
      if (deleteThing === 1 || deleteThing.deletedCount === 1) {
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
