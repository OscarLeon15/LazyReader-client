// // routes/users.js
// const express = require("express");
// const router = express.Router();
// const passport = require("passport");
// // User model
// const User = require("../models/User");
// // /routes/auth-routes.js
// const ensureLogin = require("connect-ensure-login");
// const Profile = require('../models/Profile');
// // Bcrypt to encrypt passwords
// const bcrypt = require("bcryptjs");
// const bcryptSalt = 10;

// router.get("/signup", (req, res, next) => {
//   res.render("user/signup");
// });

// router.post("/signup", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (username === "" || password === "") {
//     res.render("user/signup", { message: "Indicate username and password" });
//     return;
//   }

//   User.findOne({ username })
//   .then(user => {
//     if (user !== null) {
//       res.render("user/signup", { message: "The username already exists" });
//       return;
//     }

//     const salt = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);
  
//     const newUser = new User({
//       username,
//       password: hashPass
//     });

//     newUser.save((err) => {
//       if (err) {
//         res.render("user/signup", { message: "Something went wrong" });
//       } else {
//         res.redirect("/login");
//       }
//     });
//   })
//   .catch(error => {
//     next(error)
//   })
// });

// router.get("/login", (req, res, next) => {
//   res.render("user/login", { "message": req.flash("error") });
// });

// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/",
//   failureRedirect: "/login",
//   failureFlash: true,
//   passReqToCallback: true
// }));
// router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {  
//   // find all profiles in the database created by the current user
//   Profile.find({ 'username': req.user.username})
//     .then(userProfiles => {     
//       res.render("user/private", { user: req.user, profiles: userProfiles});
//     })
//     .catch(err => {err});
  
// });

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });
// module.exports = router;