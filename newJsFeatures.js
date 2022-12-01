 //DEFAULT PARAMS - OLD WAY
//  function multiply(x, y){
//     if(typeof y === 'undefined'){//check if y has a value
//         y = 1; //set y to 1 if it is not provided
//     }
//     return x * y;
//  };

 //USING TERNARY OPERATOR
//  function multiply(x, y){
//     y = typeof y === 'undefined'? 1 : y;
//     return x * y;
//  }

//DEAFULT PARAMS - THE NEW WAY
function multiply(a, b = 5){
    return a * b;
};
const product = multiply(6);
console.log(product);

//USING STRINGS AS DEFAULT PARAMS
const greet = (person, greeting = 'hello') => {
    console.log(`${greeting}, ${person}`);
}
greet('kabambe');

//All default parameters have to come after parameter list
//e.g.. const greet = (person, greeting = 'hello')
//Not ... const greet = (greeting = 'hello', person)

//SPREAD OPERATORS
//Expands an iterable into some other destination
//Creates copies of original arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//find maximum value in nums using Math.max()
//for arrays , you can't do it this way : Math.max(nums);
//Use spread operator to achieve the above challeng
console.log(Math.max(...nums));

//SPREAD IN FUNCTIONS
function giveMeFour(a, b, c, d){
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
};

const colors = ['red', 'blue', 'orange', 'violet'];
console.log(giveMeFour(colors));//the value of colors will be undefined
console.log(giveMeFour(...colors));//spreads entire array of colors into separate arguments

//SPREAD IN ARRAY LITERALS
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

//USE SPREAD TO COMBINE TWO ARRAYS TOGETHER
const mollusca = [...cephalopods, ...gastropods];
console.log(mollusca);//makes a copy of the original array/arrays but the the original array remains unchaged

//SPREAD IN OBJECT LITERALS
//Copies properties from one object into another object literal
const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true
}

//copy object properties into another object
const dog = {
    ...canine,
    isPet: true,
    adorable: true
}
console.log(dog);

//REST
//Looks like SPREAD
//Collects things down into a single array
//Used when we want to make functions that takes unlimited number of arguments
//Put inside the parameter list of a function definition
//Collects all remaining arguments into a real array

function sum(...nums){
    return nums.reduce((initialValue, currentValue) => {
        return initialValue + currentValue;
    })
}
const newTotal = sum(1, 3, 4, 5, 6, 7);
console.log(newTotal);

//Collects all remaining arguments into a real array

function fullName(first, last, titles){
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}
const myName = fullName('George', 'Kabambe', 'JR', 'SR', 'III');
console.log(myName);

//USING REST WITH ARROW FUNCTIONS
const multiply2 = (...nums) => (
    nums.reduce((initialVal, currVal ) => initialVal * currVal)
);
const prod = multiply2(3, 5);
console.log(prod);

//DESTRUCTING
//A short , clean syntax to unpack:
// - Values from arrays
// - Properties from objects
//Into distinct variables


//DESTRUCTURING ARRAYS
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupo',
    'Ghirmay Ghebreslassie',
    'Alphonce Simb',
    'Jared Ward'
];

const [gold, silver, bronze] = raceResults;
// console.log(gold); returns eliud kipchoge
const [first, , , fourth] = raceResults; //skip indexes in an array using commas
console.log(fourth);

const [winner, ...others] = raceResults; //using spread with destructuring
console.log(winner);//returns eliud kipchoge
console.log(others);//returns rest of the runners

//DESTRUCTURING OBJECTS
const runner = {
    firstName: "Eliud",
    lastName: "Kipchoge",
    country: "Kenya",
    title: "Elder of the order of the Golden Heart of Kenya"
}
const {firstName, lastName} = runner;//must use key name as variables when destructuring an object
console.log(firstName);

//assign values to an existing key and use that key as the new variable name 
const {country: nation,  title: honorific} = runner;
console.log(nation);//prints kenya
console.log(honorific);//prints "Elder of the order of the Golden Heart of Kenya"

//USE SPREAD WITH DESTRUCTURING
// const {firstName, lastName, ...other} = runner;

//DESTRUCTURING OBJECT PARAMETERS 
const triumpher = ({fName, lName}) => {
    return `${fName} ${lName}`
};
const racer = {
    fName: "Eliud",
    lName: "Kipchoge",
    country: "Kenya",
}

//DESTRUCTURING ARRAY PARAMETERS
const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

const parseResponse = ([protocol, statusCode, contentType]) => {
    return `Status: ${statusCode}`;
}
const newResponse = parseResponse(response);
console.log(newResponse);

