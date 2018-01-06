var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    methodOverride = require("method-override");
    
var indexRoutes = require("./routes/index");

mongoose.connect("mongodb://localhost/jsQuizDB");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");    
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Guddu, my son makes my day wonderful!!!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

/*passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/

app.use("/", indexRoutes);
//app.use("/quiz", quizRoutes);


app.get("/quiz", function(req, res){
    res.render("quiz");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("THE JS QUIZ APP SERVER HAS STARTED!!!");
});