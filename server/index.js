require("dotenv").config();
const express = require("express");
var cors = require("cors");
const path = require("path");
const router = require("./routes.js");
const app = express();

// dev
if (process.env.MODE === "dev") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200
// }
// Allowing ALL CORS requests is not recommended for production, set your origin(s).
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("/api", router);

// Fallback to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening in port ${port}`));
