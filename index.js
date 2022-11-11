require("dotenv").config();
require("./database");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/test", (req, res, next) => {
  res.send("Ta bien");
});

app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log("SERVER UP | Port: " + PORT, "http://localhost:" + PORT)
);
