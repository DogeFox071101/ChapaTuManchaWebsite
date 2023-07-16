import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import usuario from './api/usuario'; 
import seguridad from './api/seguridad';
import cancha from './api/cancha';

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/api/user', usuario)
app.use('/api/security', seguridad)
app.use('/api/sportfield', cancha)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
