/*jshint esversion: 6*/
const passport      = require("passport");
var jwtOptions      = require('./jwtOptions');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/user');
const bcrypt        = require('bcrypt');
var passportJWT     = require("passport-jwt");
var JwtStrategy     = passportJWT.Strategy;

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, done) {
  console.log('payload received', jwt_payload);
  User.findById(jwt_payload.id,(err, user)=>{
    console.log('passportStrategy user: ', user);
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null,user);
    } else {
      done(null,false);
    }
  });
});

passport.use(strategy);
