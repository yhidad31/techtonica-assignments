class Events{
  constructor(eventName, eventType){
    this.eventName = eventName;
    this.eventType = eventType;
    this.eventDate = eventDate;
    this.eventPrice = eventPrice;
  }
}
class Users{
  constructor(userName,userInterests){
    this.userName = userName;
    this.userInterests = userInterests;
    this.userSavedEvents = [];
  }
  // userRegina.addEvent("Warriors Game");
  addEvent(chosenEvent){
    this.userSavedEvents.push(chosenEvent);
  }
}

class EventRecommender{
  constructor() {
  // All main properties should go here.
  this.events = [];
  this.users = [];
  
  }

  addEvent() {
  // Adds a new Event to the System
  let newEvent = new Event (eventName,eventType,eventDate,eventPrice);
  this.events.push(newEvent);
  }

  addUser(user) {
  // Adds a new User to the System
  this.users.push(user);

  }

  saveUserEvent(){
  //Allow users to save events to a personal Events array.
  }

  deleteUser(userName) {
  // Deletes a User from the system
    
  
  }
 
  deleteEvent() {
  // Deletes the Event from the system
  }

  filter(){
  }
}
//below instantiate class -- creating object of that class


//let my varibable called system be an instance of the class EventRecommender

// When you instantiate an EventRecommender object, you should be able to do the following:
let system = new EventRecommender();
// Users:
// Add a new User to the System
let userYasmine = new Users("Yasmine","movies");
let userRegina = new Users("Regina","sports");
system.addUser(userYasmine);
system.addUser(userRegina);
console.log(system);
// Allow users to save events to a personal Events array
userRegina.addEvent("Warriors Game");
userYasmine.addEvent("Harry Potter");
console.log(userRegina);
console.log(userYasmine);
// Delete a User from the System
// Event:
// Add a new Event to the System
// Delete an Event from the System
// Filter:
// Note: You can use two separate filter functions or one if you'd like an extra challenge :)
