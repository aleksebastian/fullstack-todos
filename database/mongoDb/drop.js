// commented out to avoid an accidental db drop

// const mongoose = require("mongoose");

// const connectAndDropDb = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost/fsbp");
//     console.log("mongoose connected");
//     await mongoose.connection.dropDatabase();
//     console.log("dropped database");
//     await mongoose.connection.close();
//     console.log("mongoose connection closed");
//   } catch (e) {
//     console.error(e);
//   }
// };

// connectAndDropDb();
