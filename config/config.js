module.exports = {
    "development":{
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME
    },
    "test": {
        "username": "root",
        "password": "rootroot",
        "database": "calendar_db"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
}