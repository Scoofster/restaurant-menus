const path = require('path');
const { Sequelize } = require('sequelize');

// COMPLETED - connect to db via sequelize

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite',
})

module.exports = {
    db
};
