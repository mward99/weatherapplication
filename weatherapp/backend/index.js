const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv/config");

const db = mysql.createConnection({
  user: "mikeward",
  host: "104.197.193.143",
  password: "ROCKf13@",
  database: "Weather",
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/weather", (req, res) => {
  db.query("SELECT * FROM Weather.sensor_data", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
