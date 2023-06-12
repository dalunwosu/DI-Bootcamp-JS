const { db } = require("../config/db.js");

const insertLogin = (data) => {
  return db("login").insert(data).returning("*");
};

const insertRegister = (data) => {
  return db("register").insert(data).returning("*");
};

const getAllProfiles = () => {
  return db('register').select("*");
};
const getAllLogin = () => {
  return db("login").select("*");
};

const getUserByUsername = (username) => {
  return db("login").select("*").where({ username }).first();
};

module.exports = {
  insertLogin,
  insertRegister,
  getAllProfiles,
  getAllLogin,
  getUserByUsername,
};
