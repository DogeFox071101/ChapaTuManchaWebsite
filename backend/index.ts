import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import usuario from './api/usuario'; 
import seguridad from './api/seguridad';

const app = express();


app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/user', usuario)
app.use('/security', seguridad)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
