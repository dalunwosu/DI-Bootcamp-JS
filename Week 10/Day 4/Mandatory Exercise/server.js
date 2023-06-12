const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const user_router = require("./routes/users.js");

const app = express();
dotenv.config();

app.listen(process.env.PORT || 3030, () => {
  console.log("running on Port 8000");
});

app.use("/", express.static(__dirname + "/public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(user_router.router);
