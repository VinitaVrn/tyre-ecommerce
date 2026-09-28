import app from "./app.js";
import dotenv, { config } from "dotenv"
config(dotenv)
import  sequelize from"./db.js";

const port = process.env.PORT

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");
        console.log(`server started on: http://localhost:${port}`)
    } catch (error) {
        console.error("Database connection failed:", error);
    };


})

