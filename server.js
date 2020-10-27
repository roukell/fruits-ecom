// Requiring necessary npm packages
const express = require("express");
// Requiring passport as we've configured it
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const userRouter = require('./routes/user');
const ordersRouter = require('./routes/orders');
const adminRouter = require('./routes/admin');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const User = require('./models/user.js');
const Admin = require('./models/admin.js');

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

// local strategy for User
passport.use('user-local', new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// local strategy for Admin
passport.use('admin-local', new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// Requiring our routes
app.use(userRouter);
app.use(adminRouter);
app.use(ordersRouter);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fruitEcom",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

