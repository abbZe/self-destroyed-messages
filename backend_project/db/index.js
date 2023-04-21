const Sequelize = require("sequelize");

const sequelize =  new Sequelize("reactNodes", "root", "Destroyer2", {
    dialect: "mysql",
    host: "localhost"
});

const Notes = require('./Notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}