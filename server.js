// Requiring necessary npm packages
const express = require("express");
// Requiring passport as we've configured it
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const userRouter = require('./routes/user');
const ordersRouter = require('./routes/orders');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const User = require('./models/user.js');

// Creating express app and configuring middleware needed for authentication
const app = express();
// allow CORS
// const cors = require('cors');
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(session({
  name: 'session-id',
  secret: '123-456-789',
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Requiring our routes
app.use(userRouter);
app.use(ordersRouter);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fruitEcom",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

