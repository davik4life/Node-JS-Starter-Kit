//Main File For Portfolio, Without This File It Wont Work

//Required As First Package - Local Enviroment Variables e.g. API Keys And Email Configuration
require('dotenv').config();

//Dependencies For The Application
var express = require("express"), // Route And Server Handling (https://expressjs.com/en/guide/routing.html)
      app = express(), // Short Hand For Express  (https://expressjs.com/en/guide/routing.html)
      bodyParser = require("body-parser"), //Middleware To Handle Form Data
      flash = require("connect-flash"), //Flash Message
      session = require("express-session"), //Express Sessions - Needed For connect-flash
      indexRoutes = require("./public/routes/Index"); //Route For Page

//Deafult Engine For The Projects
app.set("view engine", "ejs");

//Links To Build Directory
//To Link Assets It Would Be /[Resoruce Directory]/[FileName].[file extension]
app.use(express.static(__dirname + "/public"));

//Default Directory To Look In For EJS
app.set("views", "./public/views");

//Allows Form Data To Be Requested
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Sesssion Configuration
app.use(session({
    secret: "Portfolio Website",
    resave: false,
    saveUninitialized: false
}));

//Connect Flash
app.use(flash());

//Gloal Data
app.use(function(req, res, next) {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

//Express route placeholder
app.use("/" ,indexRoutes);


var port = process.env.PORT || 3000  ;
app.listen(port, function (err) {
if(err){
    console.log("***********************************");
    console.log("The Server Couldnt Due To Technical Issues");
    console.log("***********************************");
    console.log("The Error Was");
    console.log(err);
    console.log("***********************************");
  } else {
    console.log("The Server Has Successfully Started On http://localhost:3128.");
  }
});
