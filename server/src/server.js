const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers");
const bodyParser = require("body-parser");
const session = require("express-session");
// const RedisStore = require("connect-redis")(session);
// const { createClient } = require("redis");
// let redisClient = createClient({ legacyMode: true });
// redisClient.connect().catch(console.error);
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/blogapp");

app.use(
  session({
    secret: "keyboard cat",
    // store: new RedisStore({ client: redisClient }),
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true, maxAge: 60 * 60 * 24 },
  })
);

// app.get("/setSession", (req, res) => {
//   var tmp = {
//     username: "emcuong",
//     password: "emcuong123",
//   };
//   var tmp1 = {
//     username: "cuongem",
//     password: "cuongne",
//   };
//   req.session.u = tmp;
//   req.session.u1 = tmp1;
//   res.send(req.session);
// });

// app.get("/getSession", (req, res) => {
//   res.send(req.session.u);
// });

// app.get("/setCookie", (req, res) => {
//   res.cookie("username", "emcuong", {
//     expires: new Date(Date.now() + 100000),
//     httpOnly: false,
//     secure: false,
//   });
//   res.send("set Cookies");
// });

// app.get("/getCookie", (req, res) => {
//   const tmp = req.cookies;
//   res.send(tmp);
// });

// app.get("/deleteCookie", (req, res) => {
//   res.clearCookie("username");
//   res.send("delete OK");
// });

router(app);

app.listen(3030);
