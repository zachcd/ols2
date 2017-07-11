import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import webSocket from 'ws';
import config from './config.json';


let app = express();
app.server = http.createServer(app);
let wss = new webSocket.Server({ app.server})


app.use(morgan('dev'));

app.use(cors({
  exposedHeaders: config.corsHeaders
}))

app.use(bodyParser.json({
  limit: config.bodyLimit
}))
