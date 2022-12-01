// var is only scoped to functions .
//it does not have a block scope
// SCOPING - BLOCK SCOPE

function doubleArr(arr){
    const result = [];
    for(let num of arr){
        let double = num * 2;
        result.push(double);
    }
    return result;
}
doubleArr([1,2,3]);

//LEXICAL SCOPE - refers to the fact that nested functions are bound to their parent functions . 
//They are only available in their parent function.
function outer(){
    let movie = 'Accident Man'; //available accross the whole function upto nested function
    console.log(movie);

    function inner(){
        let movie = 'Shoot em up'; // available only inside the nested function
        console.log(movie);

        //more nesting
        function extras(){
            console.log(movie.toUpperCase()); // looks for the nearest movie value and prints it out
        }
        extras();
    }
    inner();
}
outer();

//FUNCTION EXPRESSION
const square = function(num){
    return num * num;
}
square(7);

//REASONS WHY FUNCTIONS ARE STORED IN A VARIABLE
// 1. In javaScript, functions are objects
//  - This means we can put them in a variable
//  - we can store alot of them in an array
//  - we can even pass them around as arguments
//use console.dir in the browser to prove that functions are objects 

// function add(x, y){
//     return x + y;
// };

// const subtract = function(x, y){
//     return x - y;
// };

// function multiply(x, y){
//     return x * y;
// };

// const divide = function(x, y){
//     return x / y;
// };

//store all of the above functions in an array
// const operations = [add, subtract, multiply, divide];
//loop over functions in an array
// for(let func of operations){
    //store result of every iteration in a variable
//     let result = func(30, 5);
//     console.log(result);
// };

//STORE FUNCTIONS IN AN OBJECT
const thing = {
    doSomething: multiply
};
console.log(thing.doSomething(5, 4));

//HIGHER ORDER FUNCTIONS
// ACCEPTING OTHER FUNCTIONS AS ARGUMENTS
function callThrice(func){
    func();
    func();
    func();
};

function cry(){
    console.log('BOO HOO I\'M SO SAD');
};

//call function and pass in another function as an argument
// callThrice(cry);

function rage(){
    console.log("I HATE EVERYTHING!");
};

// callThrice(rage);

//automatically repeat function a certain number of times
function repeatNTimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}
repeatNTimes(rage, 13);


//pick one function randomly using Math.random
function pickOne(f1, f2){
    let rand = Math.random();
    console.log(rand);
    if(rand < 0.5){
        f1();
    } else {
        f2();
    }
}
//call pickOne and pass other functions as arguments
pickOne(cry, rage);

//FUNCTIONS AS A RETURN VALUE;
function multiply(num){
    return function(x){
        return x * num;
    }
}
const triple = multiply(3);
console.log(triple(5));
const double = multiply(2);
console.log(double(3));
const halve = multiply(0.5);
console.log(halve(10));

//Example two
function chooseBetween(x, y){
    return function(num){
        return num >= x && num <= y;//returns a boolean value
    }
}
const rightChoice = chooseBetween(0, 18);
console.log(rightChoice(25));

const isNineTies = chooseBetween(1990, 2000);
console.log(isNineTies(2001));

//CALLBACKS
function grumpy(){
    console.log('gruuuuuuump');
}
// const delay = setTimeout(grumpy(), 5000);
// console.log(delay);
// setTimeout(function(){
//     alert('HELLO DELAYER');
// }, 5000);

//HOISTING
// variables declared with var are hoisted
// console.log(animal);
// var animal = 'Tapir';
// console.log(animal);


// variables declared with let & const are not hoisted
// const shrimp = 'Harlequin Shrimp';
// console.log(shrimp);

// function statements are hoisted
// howl();

// function howl() {
//   console.log("AWOOOOOOO");
// }

// function expressions are...kind of hoisted.
// The variable is hoisted, but has a value of undefined
// hoot()
var hoot = function () {
  console.log("HOOOO HOOOOO")
}

function add(x, y){
    return x + y;
};

const subtract = function(x, y){
    return x - y;
};

function multiply(x, y){
    return x * y;
};

const divide = function(x, y){
    return x / y;
};

//store all of the above functions in an array
const operations = [add, subtract, multiply, divide];
//loop over functions in an array
for(let func of operations){
    //store result of every iteration in a variable
    let result = func(30, 5);
    console.log(result);
};


