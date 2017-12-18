/*
Palindrome Challenge - JavaScript JumpStart
Have the function **palindrome(str)** take the str parameter being passed, and return the boolean `true` if the argument is a palindrome (meaning that the string is the same forward as it is backward).  Otherwise, return the boolean `false`. 
Punctuation and numbers will not be part of the string.
- INPUT: palindrome("racecar");
- OUTPUT: true
- INPUT: palindrome("animal");
- OUTPUT: false
*/

//First, we read that this challenge is for a function call palindrome
//create function

function palindrome

//what's a function without parameters?
//we read that this function takes a string

function palindrome(str){
}
//now what we're trying to find is IF a word is the same backward as it is forwards
//this can also be thought of as two strings 
//we can do this by having a forward string and a backward string
//the forward will be the same as the string in the parameter because nothing will change

forward = str;

//now the backwards string
//we don't know the values of the backward string, we will be finding this out in our function

var backward = "";

//we fill backward with an empty string because we will be pushing a value to the empty string
//the value will be working from the end of the parameter str
//we can do this with a for loop
for(var i = str.lenght; i>=0; i--)
//this loop will go from the end of the string until it reaches the 0th index
//the loop then needs to be pushed into the backward string
backward += str[];

//now we are ready to create the if/else statement
//the challenge says IF the value is the same forward and backward to return true
if(forward===backward){
  return true;
}
//  or else return false

else {
  return false;
}

//Congratulations you have now worked your way through the entire challenge!
//Solution
function palindrome(str){
var forward = str;
var backward = "";
  for(var i = str.length; i >=0; i--){
    backward += str[i];
  } if(forward===backward) {
    return true;
  } else {
    return false;
  }
}


palindrome("harry");

