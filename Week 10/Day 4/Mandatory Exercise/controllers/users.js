const {
  insertLogin,
  insertRegister,
  getAllProfiles,
  getAllLogin,
  getUserByUsername,
} = require("../modules/users.js");
const bcrypt = require("bcrypt");


const _getAllProfiles = (req, res) => {
  getAllProfiles()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: err.message });
    });
};
const _getAllLogin = (req, res) => {
  getAllLogin()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: err.message });
    });
};

const _insertRegister = async (req, res) => {
  const { data } = req.body;

  if (!req.body.data) {
    return res
      .status(400)
      .json({ msg: "The request body must contain a data object." });
  }

  if (!data.password) {
    return res
      .status(400)
      .json({ msg: "The data object must contain a password field." });
  }

  try {
    const saltRounds = 10;
    const password = data.password;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    data.password = hashedPassword;

    insertRegister(data)
      .then((row) => {
        res.json({
          message: `Ok hello ${row[0].first_name}, ${row[0].last_name}, your id is ${row[0].id}`,
        });
      })
      .catch((err) => {
        if (
          err.message.includes("unique constraint") &&
          err.message.includes("email")
        ) {
          return res
            .status(400)
            .json({ msg: `Email ${data.email} already exists.` });
        }

        res.status(404).json({ msg: err.message });
      });
  } catch (error) {
    console.error(error);
  }
};

//*****

const _insertLogin = async (req, res) => {
  const { data } = req.body;
  console.log("******", data);
  insertLogin(req.body)
    .then((row) => {
      res.json(row);
    })
    .catch((err) => {
      res.status(404).json({ msg: err.message });
    });
};

const _getUsernameLogin = async (req, res) => {
  const { data } = req.body;
  console.log("777", data);
  if (!data.username || !data.password) {
    return res
      .status(400)
      .json({ msg: "Username and password fields are required." });
  }

  try {
    const user = await getUserByUsername(data.username);


    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }

    
    const isMatch = await bcrypt.compare(data.password, user.password);

    
    if (isMatch) {
      return res.json({ message: `Ok hello ${user.username}` });
    } else {
    
      return res.status(400).json({ msg: "Invalid credentials." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
};

module.exports = {
  _insertLogin,
  _insertRegister,
  _getAllProfiles,
  _getAllLogin,
  _getUsernameLogin,
};
