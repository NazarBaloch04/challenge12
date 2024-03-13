"use strict";
// . Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
let favoritePizza = ["New YorkStyle Pizza", "California Pizza", "Margherita Pizza"];
for (let name of favoritePizza) {
    console.log(`${name}`);
}
favoritePizza = ["New YorkStyle Pizza", "California Pizza", "Margherita Pizza"];
let statement = (" I like ");
for (let name of favoritePizza) {
    console.log(`${statement} ${name}`);
}
for (let name of favoritePizza)
    console.log(` I really like ${name} kind  too much`);
// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
let animals = ["Buffalo", "Cow", "Goat"];
for (let name of animals) {
    console.log(`${name}`);
}
animals = ["Buffalo", "Cow", "Goat"];
let message = (" would make a great pet");
for (let name of animals) {
    console.log(` A ${name} ${message}`);
}
animals = ["Buffalo", "Cow", "Goat"];
message = (" meat is is Halal");
for (let name of animals) {
    console.log(` A ${name} ${message}`);
}
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_Shirt(size = "", text = "") {
    console.log(`\n shirt size is ${size} printed ${text}`);
}
make_Shirt('large', `i love you Father`);
make_Shirt('extra largr', `I love you mom`);
