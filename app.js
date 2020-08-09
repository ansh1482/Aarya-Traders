const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
var nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.redirect("/homepage");
});

app.get("/homepage", function(req, res) {
  res.render("homepage.ejs");
});

app.get("/product", function(req, res) {
  res.render("product.ejs");
});

app.post("/product", function(req, res) {
  res.redirect("/product");
});

app.get("/contact", function(req, res) {
  res.render("contact.ejs");
});

app.post("/contact", function(req, res) {
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aaryatraders.biz@gmail.com',
    pass: '#tulip1482'
  }
});

var m = req.body;

var t = "Name:" + m.first + " " + m.last + "\n" + "Email: " + m.mailid + "\n" + "Phone: " + m.phone + "\n" + "Message: " + m.message;

var mailOptions = {
  from: 'aaryatraders.biz@gmail.com',
  to: 'aaryatraders.biz@gmail.com',
  subject: 'Inquiry from the website',
  text: t
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
  res.redirect("/contact");
});

app.get("/about", function(req, res) {
  res.render("about.ejs");
});

app.post("/about", function(req, res) {
  res.redirect("/about");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started...");
});
