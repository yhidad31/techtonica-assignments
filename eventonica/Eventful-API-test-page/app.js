const inquirer = require('inquirer');
//connection available to all
const connection = require('./connection');

 const app = {};

 app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
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
    inquirer.prompt(questions).then(result =>{
      connection.query('SELECT * FROM users', (err, res) => {
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

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.matchUserWithEvent = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.seeEventsOfOneUser = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 module.exports = app;