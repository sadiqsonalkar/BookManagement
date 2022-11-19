const express = require('express'); //to use express module
const dotenv = require('dotenv'); //to use port variable 
const morgan = require('morgan'); // to log request when we make a request
const bodyparser = require("body-parser"); //to parse request to body parser
const path = require('path'); //inbuilt path module in node application

const connectDB = require('./server/database/connection'); //mongodb connection

const app = express(); //creating app

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080 //to store all the details

// log requests
app.use(morgan('tiny'));

// mongodb connection function
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs") //this is my template engine

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css"))) //to load css
app.use('/js', express.static(path.resolve(__dirname, "assets/js"))) //to load js

// load routers
app.use('/', require('./server/routes/router'))//to load the route file we have createsd

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)}); //the localhost port