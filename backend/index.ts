import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express()

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

})