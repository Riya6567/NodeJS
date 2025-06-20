/*
Create a js file and compute some basic node syntax such as 
variable declaration, function, conditional statements, loops,
objects, arrays, basic asynchronous code,
*/

// Print any sentence 
console.log("Hello, Brainware University!");

// Variable Declaration
let first_name = "Sneha";
const last_name = "Ghosh";
var age = 20;

// Print the value of the variable
console.log(first_name + " " + last_name + " is " + age + " years old.");

// Function declaration
function add(a,b){
    return a + b;
} 
let sum = add(59,45);
console.log("Addition of 59 and 45 is: " + sum);

// Conditional statement: If-else
if(age > 18){
    console.log("You are an adult because you are " + age + " years old.");
}else{
    console.log("You are a minor because you are " + age + " years old.");
}

// Conditional statement using Ternary operator
let age1 = 12;
let is_adult = (age1 > 18) ? "You are an adult" : "You are a minor"; // For If-Else
console.log(is_adult + " because you are " + age1 + " years old.");
let marks = 78;
let group = marks <= 60? "Pass " : marks >= 90? "Outstanding":"Very Good"; // For If-ElseIf-Else
console.log(group + ": Because you scored " + marks + " marks");

// For loop to print 1 to 5 numbers
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// Object declaration
let person = { 
    name: "Arnab Gope",
    age: 24,
    address: "Kolkata",
    greet: function(){
        console.log("Hello, I am " + this.name + " from " + this.address + "and my age is " + this.age + " years.");
    }
}
console.log(person) // Print the entire object
person.greet(); // Print only the greeting message 

// Array declaration
let color = ['Red', 'Green', 'Blue', 'Yellow'];
console.log(color); // Print the entire array
color.forEach(function(color){
    console.log(color); // Print only the array elements using forEach loop 
});
// Using => function to print the array elements
console.log("------");
color.forEach(item => console.log(item)); 
console.log("------");

// Asynchronous code to print the message after 2 seconds
console.log("This message appears first.");
setTimeout(function() {
    console.log("This message appears after 2 seconds.");
},2000);
console.log("This message appears last.");