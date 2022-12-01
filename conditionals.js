// COMPARISON OPERATORS
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);
console.log('Hello World');
console.log(`i am a template literal but to embed me you have to use ${120}`);


// CONDITIONALS
let rating = 2;
if (rating === 3) {
    console.log('YOU ARE A SUPERSTAR!');
}
else if (rating === 2) {
    console.log("MEETS EXPECTATIONS!");
}

// Declare a variable called days and give it a default of value of 7
// Use if and if else statements to print the 7 days of the week

// let days = 9;

// if (days === 1) {
//     console.log("Sunday");
// }
// else if (days === 2) {
//     console.log("Monday");
// }
// else if (days === 3) {
//     console.log("Tuesday");
// }
// else if (days === 4) {
//     console.log("Wednesday");
// }
// else if (days === 5){
//     console.log("Thursday");
// }
// else if (days === 6) {
//     console.log("Friday");
// }
// else if (days === 7){
//     console.log("Saturday");
// }
// else {
//     console.log("No valid day found");
// }

// CREATE A VARIABLE WITH THE NAME password and give any value
// THE VALUE OF THE MUST BE A STRING
// VALUE OF PASSWORD MUST BE GREATER THAN OR EQUALS TO 6 CHARCATERS
// ENSURE THE VALUE OF THE PASSWORD HAS NO SPACES BETWEEN 

let password = 'kab ambe';

if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("THE PASSWORD IS CORRECT");
    }
    else {
        console.log("INCORRECT PASSWORD");
    }
}

let age = 20;

console.log(age === 20 ? 'correct age' : 'wrong age');

// switch statements
let days = 2;
 switch (days) {
    case 1: 
    console.log('Monday');
        break;
    case 2: 
    console.log('Tuesday');
        break;
    case 3: 
    console.log('Wednesday');
        break;
    case 4: 
    console.log('Thursday');
        break;
    case 5: 
    console.log('Friday');
        break;
    case 6: 
    console.log('Saturday');
        break;
    case 7: 
    console.log('Sunday');
        break;
 
    default:
        console.log('Not a valid day');
        break;
 }


