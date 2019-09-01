const inquirer = require('inquirer');
//connection available to all
const connection = require('./connection');
const eventful = require('eventful-node');
const client = new eventful.Client(eventful);
//above connecting to external API

const app = {};

 app.startQuestion = (closeConnectionCallback) => {
   //takes in thing that goes at the end
  inquirer.prompt({
  //async bc chained to a .then statement
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name:'action',
  }).then((res) => {
    const continueCallback = () => app.startQuestion(closeConnectionCallback);
//testing res for things
    if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
    if (res.action === 'Create a new user') app.createNewUser(continueCallback);
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful(continueCallback);
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      closeConnectionCallback();
      return;
    }
  })
}

 app.completeSentence = (continueCallback) => {

  //YOUR WORK HERE
  const questions = [
    {
        message: "What's your first name?",
        type: "input",
        name: "firstName"
    },
    {
      message: "What's your favorite color?",
      type: "input",
      name: "favColor"
  }
  ];
    inquirer.prompt(questions).then(res =>{
      console.log('My name is ' + res.firstName + ' and my favorite color is ' + res.favColor + '.');
      continueCallback();
      //above displays answer in terminal
    });
    
  //End of your work
  
}


 app.createNewUser = (continueCallback) => {
  //YOUR WORK HERE
  const questions = [
    {
      message: "What's your full name?",
      type: "input",
      name: "fullName"
    },
    {
      message: "What's your email address?",
      type: "input",
      name: "email"
    },
    {
    message: "What's your age?",
    type: "input",
    name: "age"
    }
  ];
    // inquirer.prompt(questions).then(result =>{
    //   connection.query('SELECT * FROM users', (err, res) => {
    //     if (err){
    //       throw err
    //     }
    //     console.log('user: ', res.rows[0]);
    //   })
    inquirer.prompt(questions).then(result => { 
      connection.query('INSERT INTO users (name, email, age) VALUES ($1, $2, $3)', [result.fullName, result.email, result.age], (err, res) => {
        if (err){
          throw err
        }
        console.log('user: ', res.rows[0]);
      })
      continueCallback();
  //End of your work
 })
 }; 

 app.searchEventful = (continueCallback) => {
  //YOUR WORK HERE
  "use strict";
  inquirer.prompt({
    type: "input",
    name: "keyword",
    message: "What type of event would you like to view next week in San Francisco?"
  })

  .then( answer => {
    const { keyword } = answer;
    client.searchEvents(
      {
        keywords: keyword,
        location: "San Francisco",
        date: "Next Week"
      },
      (err, data) => {
        if (err) {
          return console.error(err);
        }
        let eventResult = data.search.events.event[0];
        console.log(
          "This event next week that matches your keyword:"
        );
        // 
        console.log("event: ", eventResult.title);
        console.log("location: ", eventResult.venue_name);
        console.log("date: ", eventResult.start_time);

       inquirer.prompt([
        {
        type: "list",
        name: "yesorno",
        message: "Would you like to save this event?",
        choices: ["yes","no"],
        },
      ]).then( answer => {
        console.log("You picked: ", answer.yesorno);
        if (answer.yesorno === "no"){
          app.searchEventful(continueCallback);
        } else {
          connection.query('INSERT INTO events (name,location, date) VALUES($1, $2, $3)', [eventResult.title, eventResult.venue_name, eventResult.start_time], (err, res) => {
            if(err) {
              throw err
            }
          console.log('Congrats! You have saved an event to your account');
          continueCallback();
        }) 
      }
    })
    }
  );
}) 
}

app.matchUserWithEvent = continueCallback => {
  // YOUR WORK HERE
  connection.query('SELECT * from users', (err, results) => {
    if (err) {
      throw err;
    }
    const resultArray = [];
    for (const x of results.rows) {
      resultArray.push(`ID: ${x.id} NAME: ${x.name}`);
    }
    inquirer
      .prompt({
        type: 'list',
        name: 'userString',
        message: 'Please enter a user from the list below.\n',
        choices: resultArray
      })
      .then(userSelected => {
        let userNum = userSelected.userString.match(/\d+/g);
        connection.query('SELECT * from events ', (error, events) => {
          if (error) {
            throw error;
          }
          const eventArray = [];
          for (const x of events.rows) {
            eventArray.push(`ID: ${x.id} NAME: ${x.name}`);
          }
          inquirer
            .prompt({
              type: 'list',
              name: 'eventString',
              message: 'Please enter an event that you want the user to attend.\n',
              choices: eventArray
            })
            .then(eventSelected => {
              let eventNum = eventSelected.eventString.match(/\d+/g);
              userNum = parseInt(userNum);
              eventNum = parseInt(eventNum);
              connection.query(
                'INSERT INTO users_events (userid, eventid) VALUES ($1,$2)',
                [userNum, eventNum],
                error => {
                  if (error) {
                    throw error;
                  }
                  console.log('You added a user to an event!');
                   continueCallback();
                }
              );
            });
        });
      });
    //continue callback was commented out here
  });
 };
 app.seeEventsOfOneUser = continueCallback => {
  // YOUR WORK HERE
  connection.query('SELECT * from users', (err, results) => {
    if (err) {
      throw err;
    }
    const resultArray = [];
    for (const x of results.rows) {

      resultArray.push(`ID: ${x.id} NAME: ${x.name}`);
    }
    inquirer
      .prompt({
        type: 'list',
        name: 'userString',
        message: 'Please enter a user from the list below.\n',
        choices: resultArray
      })
      .then(userSelected => {
        let userNum = userSelected.userString.match(/\d+/g);
        userNum = parseInt(userNum);
        connection.query(
          'SELECT users.name, events.name FROM users_events JOIN users ON users_events.userid = users.id JOIN events ON users_events.eventid = events.id WHERE users.id = $1;',
          [userNum],
          (error, res) => {
            if (error) {
              throw error;
            }
            console.table(res.rows);
          }
        );
      });
  });
  // End of your work
  // continueCallback();
 };

 app.seeUsersOfOneEvent = continueCallback => {
  // YOUR WORK HERE
  connection.query('SELECT * from events ', (error, events) => {
    if (error) {
      throw error;
    }
    const eventArray = [];
    for (const x of events.rows) {
      eventArray.push(`ID: ${x.id} NAME: ${x.name}`);
    }
    inquirer
      .prompt({
        type: 'list',
        name: 'eventString',
        message: 'Please enter an event that you want the user to attend.\n',
        choices: eventArray
      })
      .then(eventSelected => {
        let eventNum = eventSelected.eventString.match(/\d+/g);
        eventNum = parseInt(eventNum);
        connection.query(
          'SELECT events.title, users.username FROM usertoevent JOIN users ON usertoevent.user_id = users.id JOIN events ON usertoevent.event_id = events.id WHERE events.id = $1;',
          [eventNum],
          (error, res) => {
            if (error) {
              throw error;
            }
            console.table(res.rows);
          }
        );
      });
  });
  // End of your work
  // continueCallback();
 };

  
module.exports = app;  