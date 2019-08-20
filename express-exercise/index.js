// const express = require('express');
// //requires express 
// const path = require('path');
// const app = express();
// //initialize variable express
// app.use(express.static(path.join(_dirname,'public')));
// //set static folder
// const PORT = process.env.PORT || 5000;
// //we want to look at env variables called PORT
// //when we deploy server is mpst likely not going to run it on 5000, but port number may be in env variable, but if not avail we want to run it on 5000
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// //want to listen on port to run web server
// //callback is second parameter, and console.log so that the console will indicate thatthe server is running

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));