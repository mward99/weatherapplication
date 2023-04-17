// Import required modules source: https://www.youtube.com/watch?v=re3OIOr9dJI&t=3935s
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv/config");

// Connection to database source: https://www.youtube.com/watch?v=re3OIOr9dJI&t=3935s and https://www.bezkoder.com/react-node-express-mysql/
const db = mysql.createConnection({
  user: "mikeward",
  host: "104.197.193.143",
  password: "ROCKf13@",
  database: "Weather",
});

// create express app source: https://www.youtube.com/watch?v=re3OIOr9dJI&t=3935s
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// make a route that selects everything from database
app.get("/weather", (req, res) => {
  db.query("SELECT * FROM Weather.sensor_data", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// backend routing port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
