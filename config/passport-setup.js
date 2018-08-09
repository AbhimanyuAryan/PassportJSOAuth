const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        // comes here and calls the call back
        console.log(profile);
        console.log('passport callback function fired');
         // run on this at it will hang now
         new User({
             username: profile.displayName,
             googleId: profile.id,
         }).save().then((newUser) => {
             console.log('new user created' + newUser);
         });
    })
);