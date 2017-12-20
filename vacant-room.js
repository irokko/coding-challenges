/*Fullstack Academy - JavaScript JumpStart
The Array Hotel - Instructions

In this exercise, we'll be using an array to manage the occupancy
of a hotel called The Array Hotel.

Each room in the hotel will be represented with a "vacant" 
or "occupied" string in the array. The index of the element
is the room number. For example, for a hotel with an 
occupancy array of ["occupied", "vacant", "occupied", "vacant"],
we can determine that Rooms 0 and 2 are occupied 
and Rooms 1 and 3 are free.

Your job is to write a function called findVacantRooms 
to help the owner of the hotel find which rooms are 
vacant. return an array of the room numbers that are vacant.

If all rooms are occupied, return "No Vacancy"; 

- INPUT: findVacantRooms(["occupied", "vacant", "occupied", "vacant"]));
- OUTPUT: [1,3]

- INPUT: findVacantRooms(["occupied", "occupied", "occupied"]));
- OUTPUT: [];

Write Code Below
**************************/
//The challenge is asking create function that uses findVacantRooms
//We know the parameters will be string values because a room will either be "occupied" or vacant
function findVacantRooms(str){
  
//The challange asks us to find and list the vacant rooms 
//From this we can see that we will be needing to find values and push them to an array list
var roomsVacant = [];

//We live the array empty, this is where we will store the values of "vacant" that we find
//To go through the whole list in the array we use a for loop
for(var i = 0; i < str.length; i++){
//What we want to do now is while it is looping through the array to check if the values are vacant
//We can do this by an if statement
    if(str[i] === "vacant") {

//Once we find a value that is equal to "vacant" we want to store that number to our roomsVacant array so we can keep track
    roomsVacant.push(i);
    } 
//Make sure we return the value we want, which in this case is roomsVacant
  } return roomsVacant;
}

//Now we just need to create an instance to check that this function works
findVacantRooms(["vacant", "occupied", "vacant"]);


//Congratulations you have now worked your way through the entire challenge!
//Solution

function findVacantRooms(str){
var roomsVacant = [];
  for(var i = 0; i < str.length; i++){
    if(str[i] === "vacant") {
    roomsVacant.push(i);
    } 
  } return roomsVacant;
}

findVacantRooms(["vacant", "occupied", "vacant"]);
