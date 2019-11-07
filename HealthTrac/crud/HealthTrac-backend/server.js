// const express = require('express')

// // use process.env variables to keep private variables,
// require('dotenv').config()

// // Express Middleware
// const helmet = require('helmet') // creates headers that protect from attacks (security)
// const bodyParser = require('body-parser') // turns response into usable format
// const cors = require('cors')  // allows/disallows cross-site communication
// const morgan = require('morgan') // logs requests
// const session = require('express-session');
// const { ExpressOIDC } = require('@okta/oidc-middleware');

// // session support is required to use ExpressOIDC
// app.use(session({
//   secret: 'this should be secure',
//   resave: true,
//   saveUninitialized: false
// }));

// const oidc = new ExpressOIDC({
//   issuer: 'https://${yourOktaDomain}/oauth2/default',
//   client_id: '{clientId}',
//   client_secret: '{clientSecret}',
//   redirect_uri: 'http://localhost:3000/authorization-code/callback',
//   scope: 'openid profile'
// });

// // ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
// app.use(oidc.router);

// // db Connection w/ Heroku
// // const db = require('knex')({
// //   client: 'pg',
// //   connection: {
// //     connectionString: process.env.DATABASE_URL,
// //     ssl: true,
// //   }
// // });

// // db Connection w/ localhost
// var db = require('knex')({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : '',
//     password : '',
//     database : 'crud-practice-1'
//   }
// });

// // Controllers - aka, the db queries
// const main = require('./controllers/main')

// // App
// const app = express()

// // App Middleware
// const whitelist = ['http://localhost:3001']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(helmet())
// app.use(cors(corsOptions))
// app.use(bodyParser.json())
// app.use(morgan('combined')) // use 'tiny' or 'combined'

// // App Routes - Auth
// app.get('/', (req, res) => res.send('hello world'))
// // GET https://api.fitbit.com/1/user/[user-id]/activities/heart/date/[base-date]/[end-date].json
// app.get('/crud', (req, res) => main.getTableData(req, res, db))
// // GET https://api.fitbit.com/1.2/user/-/sleep/date/2017-04-02.json
// app.post('/crud', (req, res) => main.postTableData(req, res, db))

// app.put('/crud', (req, res) => main.putTableData(req, res, db))
// app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

// // App Server Connection
// app.listen(process.env.PORT || 3000, () => {
//   console.log(`app is running on port ${process.env.PORT || 3000}`)
// })
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var FitbitStrategy = require('./lib').FitbitOAuth2Strategy;
var passport = require('passport');
var app = express();

app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: 'keyboard cat' }));

app.use(passport.initialize());
app.use(passport.session({
  resave: false,
  saveUninitialized: true
}));

const CLIENT_ID = '<YOUR_CLIENT_ID>';
const CLIENT_SECRET = '<YOUR_CLIENT_SECRET>';

app.use(passport.initialize());

var fitbitStrategy = new FitbitStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scope: ['activity','heartrate','location','profile'],
  callbackURL: "http://localhost:3000/auth/fitbit/callback"
}, function(accessToken, refreshToken, profile, done) {
  // TODO: save accessToken here for later use

  done(null, {
    accessToken: accessToken,
    refreshToken: refreshToken,
    profile: profile
  });

});

passport.use(fitbitStrategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var fitbitAuthenticate = passport.authenticate('fitbit', {
  successRedirect: '/auth/fitbit/success',
  failureRedirect: '/auth/fitbit/failure'
});

app.get('/auth/fitbit', fitbitAuthenticate);
app.get('/auth/fitbit/callback', fitbitAuthenticate);

app.get('/auth/fitbit/success', function(req, res, next) {
  res.send(req.user);
});

app.listen(3000);