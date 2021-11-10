import { createConnection } from "typeorm";

createConnection().then(connection => {
    console.log("Connected to database");
}).catch(error => {
    console.log("Error connecting to database: ", error);
});