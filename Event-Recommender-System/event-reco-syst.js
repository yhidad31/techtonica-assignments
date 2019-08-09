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

  addEvent(anEvent) {
  // Adds a new Event to the System
  this.events.push(newEvent);
  }

  addUser(user) {
  // Adds a new User to the System
  this.users.push(user);

  }

  saveUserEvent(){
  //Allow users to save events to a personal Events array.
  }

  deleteUser(userToDelete) {
  // Deletes a User from the system
  //1.Find the array element w userName
  this.users = [userYasmine, userRegina]
  //iterate thru array element w username to match 'each element'.userName == userName
  // let userIndex = this.users.indexOf(userName);
  //   this.user.splice(userIndex,1);
//   for (let i = 0; i < this.users.length; i++){
//   if (this.users[i].userName === userName) {
//     this.users.splice([i],1)
//   }
// }
this.users.filter(user => user.userName != userToDelete);
// this.users.filter(function(user){
//   user.userName != userName;
// }
  //2.Then delete array element
  
  }
 
  deleteEvent() {
  // Deletes the Event from the system
  }
//input to filter?
//output to filter?
this.users.filter(user => user.userName != userToDelete);
  filter(){
    searchTickets(min,max){
      let msg = "Eligible tickets: ";
      let counter = 1;
      for (let i =0; i<this.availableTickets.length; i++){
        if (this.availableTickets[i].ticketPrice >= min && this.availableTickets[i].ticketPrice<=max){
          msg += counter + "."+ " " + this.availableTickets[i].ticketType + " ";
          counter++;
      }
     } 
     if (counter === 1){
       msg = "There are no available tickets.";
     }
      return msg;
     }
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
console.log(system);
// Allow users to save events to a personal Events array
userRegina.addEvent("Warriors Game");
userYasmine.addEvent("Harry Potter");
console.log(userRegina);
console.log(userYasmine);
// Delete a User from the System
system.deleteUser("Yasmine");
// Event:
// Add a new Event to the System
let eventWarriorsVsSpurs = new Event("Warriors vs. Spurs", "Sports","August 5",50);
system.addEvent(eventWarriorsVsSpurs);
let eventPastaCookingClass = new Event("Learn to make buccatini from scratch","Cooking","August 7",50);
system.addEvent(eventCookingClass);
let eventHarryPotterSocererStone = new Event("Harry Potter 1", "Movie","August 7",15);
system.addEvent(eventHarryPotterSocererStone);
let eventGardeningForFall = new Event("Learn to plant and grow winter squash","Gardening","August 10",20);
system.addEvent(eventGardeningForFall);

//Allow user to add event to personal array
userYasmine.addFavoriteEvent(eventHarryPotterSocererStone);
userRegina.addFavoriteEvent(eventWarriorsVsSpurs);
userKesha.addFavoriteEvent(eventWarriorsVsSpurs);
userKesha.addFavoriteEvent(eventGardeningForFall);
console.log(userYasmine);
console.log(userRegina);
console.log(userYasmine);
// Delete an Event from the System
system.deleteEvent(eventHarryPotterSocererStone);
// Filter:
// Note: You can use two separate filter functions or one if you'd like an extra challenge :)

