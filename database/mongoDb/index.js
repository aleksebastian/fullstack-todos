const mongoose = require("mongoose");

connect().catch((err) => console.log(err));

async function connect() {
  await mongoose.connect("mongodb://localhost/fsbp");
}

const sampleSchema = mongoose.Schema({
  something: String,
});

const Sample = mongoose.model("Sample", sampleSchema);

module.exports = Sample;
