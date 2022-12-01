// accessing items in an array using index :
// arr[3]
// accessing last item in an array: arr[arr.length-1]

// creating arrays
// console.log('george');

let students = [];
console.log(students);

// array of strings
let colors = ['red', 'orange', 'yellow', 'blue'];
colors[0] = 'pink';
console.log(colors);
// console.log(colors.indexOf('red'));
// console.log(colors);

let fruits = ['orange', 'mangoes', 'bananas' ];
fruits.push('Apples'); // adding an item to the end of an array
fruits.pop(); //removing an item from the end of an array
fruits.shift(); // removes an item from the beginning of an array
fruits.unshift('watermelon');

console.log(fruits);

//concatenating arrays
let cohortOne = [true, false, 15];
let cohortTwo = [false, true, 19];
let femidevs  = cohortOne.concat(cohortTwo);
console.log(femidevs.includes(19));
console.log(femidevs.indexOf(15));
console.log(cohortOne.join('-'));
console.log(femidevs.slice(1, 4));

//making a duplicate of an array
let femidevsTwo = femidevs.slice();
console.log(femidevsTwo);
// console.log(femidevs);

const sortOne = ['hello', 'kenya', 'world', 'brother'];
console.log(sortOne.sort());

const animals = [
    ['man', 'monkey', 'bat', 'cows'],
    ['lizard', 'crocodile', 'chameleon', 'turtle'],
    ['frogs', 'newt',  'salamander', 'toads']
];
 //mammals :  man, monkey, bat, cows
 //reptiles :  lizard, crocodile, chameleon, turtle
 // amphibians :  frogs, newt, salamander, toads

 const mammals = animals[0].join(' ');

 console.log(`mammals : ${mammals}`);


 const reptile = animals[1];
 console.log(`Reptiles : ${reptile}`);

 const amphibians = animals[2];
 console.log(`Amphibians : ${amphibians}`);

//  const tebla = [
//     ['age', 20],
//     ['City','Tulsa'],
//     ['isAdmin', true],
//     ['Zip', 91003]
//  ]
//  const age = tebla[0].join(':');
//  console.log(tebla);
//  console.log(age);




