const express = require('express');
const mongoose = require('mongoose')
//Gives access to Cookies
const cookieSession = require('cookie-session');
//Tells Passport.js to make use of cookies
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

//Must be in this order to register the Schema for model 'users'
require('./models/User');
require('./services/passport');

//Connects MongoDB to Express API - 1st Optional
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

//Connect Database
//connectDB();

//Express App used to register the route handler with.
const app = express();

//app.use - Express Middleswares that operate on incoming request before sent off to request handlers
app.use(bodyParser.json());

//Creates cookie session
app.use(
  cookieSession({
      //How long cookie can exist in the browser
      maxAge: 30 * 24 * 60 * 60 * 1000,
      //Key used to encrypt cookie
      keys: [keys.cookieKey]
  })  
);

//Tells Passport to make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

//Returns a function and immediately invokes the app object
require('./routes/authRoutes')(app);


//Configuration for Express to behave correctly in production environment
if (process.env.NODE_ENV === 'production') {
  //First - Making sure express will serve production assets - main.js, main.css, etc
  app.use(express.static('client/build'));
  //Second -Express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
};

//Dynamically figures out which port to listen to. If one hasn't been defined then by default use 5000
const PORT = process.env.PORT || 5000

//Instructs Express to tell Node to listen to PORT
app.listen(PORT, () => console.group(`Motha Fuckin Serva Started On ${PORT}`));