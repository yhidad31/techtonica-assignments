class Ticket {
  constructor(ticketType,ticketPrice){
    this.ticketType = ticketType;
    this.ticketPrice = ticketPrice;
  }
}//end of class Ticket declaration
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }//end of constructor
  //class methods
  addAvailableTickets(ticketType,ticketPrice){
    let newTicket = new Ticket(ticketType,ticketPrice);
    return this.availableTickets.push(newTicket);
  }//Ticket search method
  searchTickets(min,max){
   let msg = "Eligible tickets: ";
   let counter = 1;
   for (let i =0; i<this.availableTickets.length; i++){
     if (this.availableTickets[i].ticketPrice >= min && this.availableTickets[i].ticketPrice<=max){
       msg += counter + " " + this.availableTickets[i].ticketType + " ";
       counter++;
   }
  } 
  if (counter === 1){
    msg = "There are no available tickets.";
  }
   return msg;
  }
}//end of class Event declaration


// The below statement creates an object.
const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");
const event_array = new Array();

// pushing single object to an array
// event_array.push(event_obj1);
// pushing multiple objects to an array at once

// in order to check whether the elements are pushed, use console.log
console.log(event_array);

event_array.push(event_obj1, event_obj2, event_obj3);

console.log(event_obj1.addAvailableTickets("human",299));
console.log(event_obj1.addAvailableTickets("vampire", 99));

event_obj2.addAvailableTickets("General Admission", 25);
event_obj2.addAvailableTickets("Floor Seating", 80);

event_obj2.addAvailableTickets("Orchestra", 300);
event_obj2.addAvailableTickets("Mezzanine", 200);
event_obj2.addAvailableTickets("Balcony", 100);



$(document).ready(function() {
  let html = "";
  $.each(event_array, function(index, item) {
    html+= `<li>${item.name} - ${item.description} - ${item.searchTickets(0,100)}</li>`;
  });
  // insert final html into #event...
  $("#event").html(html);
});













