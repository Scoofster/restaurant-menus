const { db } = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// COMPLETED - create a Menu model {title STRING}

const Menu = db.define("Menu", {
    title: {
        type: DataTypes.STRING
    }
})

async function main(){
    await Menu.sync()

    await Menu.create({
        title: 'Bargin Bucket Menu'
    })
}

module.exports = {Menu};