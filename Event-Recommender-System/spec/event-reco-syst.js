class Events{
  constructor(eventName,eventType,eventDate,eventPrice){
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

  addEvent(newEvent) {
  // Adds a new Event to the System
  this.events.push(newEvent);
  }

  addUser(user) {
  // Adds a new User to the System
  this.users.push(user);

  }

  deleteUser(userToDelete) {
  // Deletes a User from the system
  //1.Find the array element w userName
  //iterate thru array element w username to match 'each element'.userName == userName
this.users = this.users.filter(users => users.userName != userToDelete);
// this.users.filter(function(user){
//   user.userName != userName;
// }
  //2.Then delete array element
  
  }
 
  deleteEvent(eventToDelete) {
  // Deletes the Event from the system
  this.events = this.events.filter(events => events.eventName != eventToDelete);
  }
//input to filter?
//output to filter?

    filter(min,max){
      let msg = "Available events: ";
      let counter = 1;
      for (let i =0; i<this.eventPrice.length; i++){
        if (this.availableTickets[i].ticketPrice >= min && this.availableTickets[i].ticketPrice<=max){
          msg += counter + "."+ " " + this.availableTickets[i].ticketType + " ";
          counter++;
      }
     } 
     if (counter === 1){
       msg = "There are relevant events.";
     }
      return msg;
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
let userKesha = new Users("Kesha","gardening");
system.addUser(userYasmine);
system.addUser(userRegina);
system.addUser(userKesha);
console.log(system);
// Allow users to save events to a personal Events array
let eventWarriorsVsSpurs = new Events("Warriors vs. Spurs", "Sports","August 5",50);
system.addEvent(eventWarriorsVsSpurs);
let eventPastaCookingClass = new Events("Learn to make buccatini from scratch","Cooking","August 7",50);
system.addEvent(eventPastaCookingClass);
let eventHarryPotterSocererStone = new Events("Harry Potter 1", "Movie","August 7",15);
system.addEvent(eventHarryPotterSocererStone);
let eventGardeningForFall = new Events("Learn to plant and grow winter squash","Gardening","August 10",20);
system.addEvent(eventGardeningForFall);

userYasmine.addEvent(eventHarryPotterSocererStone);
userRegina.addEvent(eventWarriorsVsSpurs);
userKesha.addEvent(eventWarriorsVsSpurs);
userKesha.addEvent(eventGardeningForFall);
console.log(userYasmine);
console.log(userRegina);
console.log(userKesha);

// Delete a User from the System
system.deleteUser("Yasmine");


//Allow user to add event to personal array

// Delete an Event from the System
system.deleteEvent("Harry Potter 1");
// Filter:
// Note: You can use two separate filter functions or one if you'd like an extra challenge :)
console.log(system);

module.exports = EventRecommender;