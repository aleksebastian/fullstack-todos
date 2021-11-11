const mongoose = require("mongoose");

connect().catch((err) => console.log(err));

async function connect() {
  await mongoose.connect("mongodb://localhost/fsbp");
}

const thingSchema = mongoose.Schema({
  id: Number,
  name: String,
});

const Thing = mongoose.model("Thing", thingSchema);

module.exports = Thing;
