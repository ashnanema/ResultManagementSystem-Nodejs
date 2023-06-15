const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

// mongodb connection
mongoose.connect("mongodb://localhost/result_management",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Successfully connected to database");
})

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(session({
    secret: "secret",
    saveUninitialized:true,
    cookie: { maxAge: 6000},
    resave: false 
}));
app.use(flash());

// routes
app.use(require("./routes/index"))
app.use(require("./routes/teacherLogin"))
app.use(require("./routes/teacherView"))
app.use(require("./routes/findResult"))
app.use(require("./routes/showResult"))



app.listen(3000, () => {
    console.log("Server started at port: 3000");
});