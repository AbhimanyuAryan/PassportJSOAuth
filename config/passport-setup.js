const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

// Client ID: 716784739362-kjof3i49kh1e8al1aua7qill601tn0gr.apps.googleusercontent.com
// Client Secret: F2J4jDsAw69k2NPuHOQDoOvI

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }), () => {
        // passport callback function
    }
)