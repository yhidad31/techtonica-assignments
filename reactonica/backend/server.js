const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true
}
);

const connection = mongoose.connection;
connection.once('open', () =>{ 
  console.log('Mongo database connection established successfully!');
});
const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');
const users_eventsRouter = require('./routes/users_events');

app.use('/events', eventsRouter);
app.use('/users_events', users_eventsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
