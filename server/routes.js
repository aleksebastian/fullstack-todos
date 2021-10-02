const controller = require("./controllers.js");
const router = require("express").Router();

router.get("/something/:thingToGet?", controller.get);

router.post("/something/", controller.post);

router.put("/something/", controller.put);

router.delete("/something/", controller.delete);

// all others
router.all("*", controller.error);

module.exports = router;
