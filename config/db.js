const { Sequelize } = require("sequelize");

const createDB = new Sequilize("UrlShortner", "user", "pass", {
    dialect: "sqlite",
    host: ".config/db.sqlite"
})

module.exports = createDB;