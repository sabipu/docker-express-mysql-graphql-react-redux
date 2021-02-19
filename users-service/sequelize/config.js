require("dotenv").config();


module.exports = {
    "test": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "dialect": "mysql",
        "seederStorage": "sequelize"
    },

    "development": {
        "username": 'root',
        "password": 'root',
        "database": 'db',
        "host": 'localhost',
        "port": 7200,
        "dialect": "mysql",
        "seederStorage": "sequelize"
    }
};