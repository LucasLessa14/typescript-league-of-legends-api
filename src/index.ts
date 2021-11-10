import dotenv from 'dotenv'
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';

import { router } from "./router";

import "./database";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({ error: err.message });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
