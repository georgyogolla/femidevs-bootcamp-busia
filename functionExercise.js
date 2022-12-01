//function declaration or function statement
// generating a random dice roll or a single die roll
function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 2; //prints random numbers bewteen 0 and 6
    console.log(`Rolled : ${roll}`);
}
rollDie();

// function throwDice(){
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }
// throwDice(); //calls another function in its environment

//using loop to roll die
function throwDice(numRolls){
       for(let i = 0; i < numRolls; i++){
        rollDie();
       }
    }
    throwDice(5);

function greet(nickname){
    console.log(`Hello, ${nickname}`);
}
greet('Kabambe');

//parameters and arguments
function square(num){
    console.log(num * num);
}
square(8); 
//value passed inside a function while executing is called an argument while the variable name passed inside a function while defining it is called a parameter

function sum(x, y){
    console.log(x + y);
}
sum(2, 3);

//order of parameters is very important
function divide(a, b){
    console.log(a / b);
}
divide(6, 2);

//RETURN IN FUNCTIONS
//Return values can be captured or stored for future use
//Functions returns only 1 value
//A function can have multiple return statements
//Return statements ends function execeution


function add(x, y){
    return x + y; //returning only 1 value
    // console.log('Hello world'); //won't be executed
    //return [x, y]//returns multiple values
}
const total = add(2, 3);
console.log(total);


//If you have a return statement in the middle of a function and the return is executed, 
//the code after it will not execute
// function newSquare(x){
//     return x * x;
//     console.log('PRINTED SQUARES');
// }
// newSquare(4);
// function sqrt(sq){
//     return sq * sq;
//     console.log('HELLO WORLD');
// }
// let square2 = sqrt(4);



// function isPurple(color){
//     if (color.toUpperCase() === 'purple'){
//         return true;
//     }
//     else {
//         return false
//     }
// }
// const newC = isPurple('red');
// console.log(newC);

// function isPurple(color){
//     if (color.toLowerCase() === 'purple'){
//         return true;
//     }
//         return false
// }
// isPurple('purple', 'red', 'pink');

//when working with simple situations like YES  OR NO



//MULTIPLE CHOICES
function containsPurple(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false;
}
let container = containsPurple(['orange', 'yellow', 'magenta']);
console.log(container);
// MORE PRACTICE ON FUNCTIONS


// Write a isValidPassword function
// It accepts 2 parameters: password and username
// Password must:  
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// function isValidPassword(password, username){
//     if(password.length < 8){
//         return false;
//     }
//     if(password.indexOf(' ') !== -1){
//         return false;
//     }
//     if(password.indexOf(username) !== -1){
//         return false;
//     }
//     return true;
// }
// const validator = isValidPassword('89Fjj1nms', 'dogLuvr');
// console.log(validator);

//REFACTORING PASSWORD VALIDATOR
function isValidPassword(password, username){
    if(password.length < 8 || 
       password.indexOf(' ') !== -1 || 
       password.indexOf(username) !== -1)
    {
    return false;
    }
    return true;
}
const validator = isValidPassword('ywzj1nms', 'dogLuvr');
console.log(validator);

//MORE REFACTORING 
function isValidPassword(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const containsUsername = password.indexOf(username) !== -1;
    //apply a condition
    // if(tooShort || hasSpace || containsUsername) return false;
    // return true; 
    //Another method

    // if(!tooShort && !hasSpace && !containsUsername) return true; 
    // return false;  

    //Even more simpler method
   return  !tooShort && !hasSpace && !containsUsername;
}
// const checker = isValidPassword('dogLuvr123!', 'dogLuvr'); 
// console.log(checker);

//FINDING AVERAGE USING FUNCTIONS
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(arr){
    // initialise a starting addition point
    let total = 0;
    //loop over each element in an array
    for(let num of arr){
        // add them together
        total += num;
    }
    let averaged = total / arr.length;
    return averaged;
    // OR
    // return total /arr.length;
}
const average = avg([1,2,3,4,5,6,7,8,9,10]);
console.log(average);


// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  
//Make sure you ignore string casing!

//Solution 1
function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(lowerCased.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}
const panGram = isPangram('The quick brown fox jumps over the lazy dog');
console.log(panGram);

//Solution 2
function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lowerCased.includes(char)){
            return false;
        }
    }
    return true;
}
const pangram = isPangram('The quick brown fox jumps over the lazy dog');
console.log(pangram);

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false


//PLAYING CARD FUNCTION

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function getCard(){
//     const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];
    
//     //GENERATE INDEX OF VALUES RANDOMLY
//     const valIdx = Math.floor(Math.random() * values.length);
//     const value = values[valIdx]; // return individual values

//     //DECALARE A VARIABLE OF SUITS
//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

//     //GENERATE INDEX OF SUITS RANDOMLY
//     const suitIdx = Math.floor(Math.random() * suits.length);
//     const suit = suits[suitIdx]; // return individual suits

//     //print out value against suit
//     // console.log(value, suit);

//     //return an object of value against suit
//     return {value:value, suit:suit};
// }
// const cards = getCard();
// console.log(cards);

//SECOND SOLUTION
//create a new function that only generates index randomly and returns items at index

function pick(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard(){
    //DECLARE ARRAY OF VALUES
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];
    
    //DECALARE A VARIABLE OF SUITS
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

    //return an object of value against suit
    return {value:pick(values), suit:pick(suits)};
}
getCard();



// function addNext(x, y){
//     console.log(x + y);//5
// }
// const next = addNext(2, 3);
// console.log(next);//undefined

// function addNext(x, y){
//     return (x + y);
// }
// const next = addNext(2, 3);
// console.log(next);//5

function isPurple(color){
    if(color === "purple"){
        return true;
    }
    else {
        return false;
    }
}
let newColor = isPurple('red');
console.log(newColor);


// function isPurple(color){
//     return color.toLowerCase() === 'purple';       
// }
// const newPurple = isPurple('purple');
// console.log(newPurple);


