const Sequelize = require('sequelize');

//allows private variables to load - npm i --save-dev dotenv
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    logging: false,
});

const user = sequelize.define('user',{
    name: {
        type: Sequelize.STRING,
    },
    url: {
        type: Sequelize.STRING,
    },
    urlS: {
        type: Sequelize.STRING,
    }
});

course.hasMany(user, {
    foreignKey: 'userID',
})

sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;