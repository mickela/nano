const Sequelize = require('sequelize');
const db = require('../config/db');


const Url = db.define('url', {
    urlCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    longUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shortUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
},
    {
        timestamps: false
    }
)

module.exports = Url;