const { Sequelize } = require("sequelize");

const createDB = new Sequelize("UrlShortner", "user", "pass", {
    dialect: "sqlite",
    host: "./config/db.sqlite"
})

module.exports = createDB;