import { createConnection } from "typeorm";

createConnection({
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": 3306,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/database/migrations"
    }
}).then(connection => {
    console.log("Connected to database");
}).catch(error => {
    console.log("Error connecting to database: ", error);
});