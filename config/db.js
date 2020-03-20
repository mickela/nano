const Sequelize = require('sequelize');
const config = require('config');

const DB_NAME = config.get('db_name');
const DB_USER = config.get('db_user');
const DB_PASS = config.get('db_pass');

const db  = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    // operatorsAliases: false, // -> this is a no-op, and should no longer be used!

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = db;