class EventRecommender() {
  constructor() {
  // All main properties should go here.
  this.events = [];
  this.users = [];
  
  }

  addEvent() {
  // Adds a new Event to the System
  }

  addUser() {
  // Adds a new User to the System
  }

  saveUserEvent(){
  //Allow users to save events to a personal Events array.
  }

  deleteUser() {
  // Deletes a User from the system
  }
 
  deleteEvent() {
  // Deletes the Event from the system
  }

  filter(){
  }
}
class Events(){
  constructor(eventName, eventTYpe){
    this.eventName = eventName;
    this.eventType = eventType;
    this.eventDate = eventDate;
    this.eventPrice = eventPrice;
  }
}
class Users (){
  constructor(userName,userInterests){
    this.userName = userName;
    this.userInterests = userInterests;
    this.userSavedEvents = userSavedEvents;
  }

}