import express from 'express';
import path from 'path';
// import { client } from './mongoDb.mjs'

import apiV1Router from './apiV1/index.mjs'
const __dirname = path.resolve();
const app = express();
app.use(express.json()); // body parser

app.use('/api/v1',apiV1Router);


app.use('/static',express.static(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App is listening on Port: ${PORT}`)
})
