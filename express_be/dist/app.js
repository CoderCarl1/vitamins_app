"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
//routes
const baseRouter = require('./routes/base_route');
const port = process.env.PORT || 3001;
const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//connecting to db
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err) => {
    if (err) {
        console.error('Error connecting to database', err);
    }
    else {
        console.warn('Connected to database!');
    }
});
//use cors middleware
// allowed sites
// const allowList = ['this_is_the_frontendwebsite', 'http://localhost:3000/']
// const corsOptionsDelegate = (req, callback) => {
//   let corsOptions;
//   if (allowList.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }
// const corsOptions = {
//   origin: ,
//   optionsSuccessStatus: 200
// }
app.use(cors());
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
// Routes
// app.use(authRouter)
app.use(baseRouter);
app.listen(port, () => {
    console.log('⚡️[Express server]: listening on port ' + port + '.');
});
