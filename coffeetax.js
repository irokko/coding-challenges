/*
Let's create a function you can use during your morning commute!
We'll create a function that calculates how much your morning cup of joe costs...using the base price of your cup of coffee, and the sales tax in your current state!
*/
// Coffee Sales Tax Part 1:
// Sales Tax is 8.9% 
// Baseline for Coffee Price 

//We will start with what we know
//We know that the value of coffee without tax is $5
var coffeeTotal = 5.00;

//The tax for coffee in PA is 6%
//if you need to brush up on percentages you check out http://www.mathsisfun.com/percentage.html
var PASalesTax = .06;

//the challenge wants us to create a function that will find how much coffee plus tax is
//we need to declare the function
//use name that is states what it will do helps with the thinking process
function totalWithPASalesTax(){
}

//next we need to know how much in total will sales tax will be
var coffeeSalesTax = coffeeTotal * PASalesTax;

//we can now find the total by adding the coffeeTotal and the coffeeSalesTax together
var coffeeTotalAndTax = coffeeTotal + coffeeSalesTax;

//we can now end the function by returning the value we want to know
return coffeeTotalAndTax;

//for functions to work remember we need to initiate them
totalWithPASalesTax();

//Congratulations you have now worked your way through the entire challenge!
//Solution


var coffeeTotal = 5.00;
var PASalesTax = 0.06;
function totalWithPASalesTax(){
  var coffeeSalesTax = coffeeTotal * PASalesTax;
  var coffeeTotalAndTax = coffeeTotal + coffeeSalesTax;
  return coffeeTotalAndTax;
}

totalWithPASalesTax();