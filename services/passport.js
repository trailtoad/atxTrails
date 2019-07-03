const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//Gives access to user model class
const User = mongoose.model('users');

//Encoding Users - Take identifier from existing user and puts into the cookie to reuse later. user.id is from the mongo identifier not profile id.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//Searches over and grabs a particular User identifier from cookie and turns back into a user
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    });
});

//Creates and registers a new instance of google strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback', 
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            //Atempt to find users already in database to not add again
            const existingUser = await User.findOne({ googleId: profile.id })
            
            if (existingUser) {
                //If we already have a record with the given ID
                return done(null, existingUser);
            } 
            //Takes new mongoose model instance and saves to the database
            const user = await new User({ googleId: profile.id }).save()
            done(null, user); 
        }
    )
);