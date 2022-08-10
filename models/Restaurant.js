const { db } = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// COMPLETED - create a Restaurant model {name STRING, location STRING, cuisine STRING}

const Restaurant = db.define("restaurant", {
    name: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    cuisine: {
        type: DataTypes.STRING
    }
})

async function main(){
    await Restaurant.sync()

    await Restaurant.create({
        name: 'KFC',
        location: 'London',
        cuisine: 'FastFood'
    })
}

module.exports = {Restaurant};