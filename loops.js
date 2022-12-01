//for...loop
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

for (let i = 10; i >= 0; i-=2){
    console.log(i);
}

const animals = ['cow', 'dogs', 'cats', 'goats', 'sheep'];
// console.log(animals);
for(let i = 0; i < animals.length; i++){
    console.log(`Animal at index ${i} is ${animals[i]}`);
}

//Animal at index X is Y!

let str = 'LOL';
for(let i = 0; i <= 4; i++){
    console.log(`Outer : ${i}`);
    for (let j = 0; j < str.length; j++){
        console.log(` Inner : ${str[j]}`);
    }
}

//WHILE LOOP

let num = 0;
while (num < 10){
    console.log(num);
    num++;
}

// GUESSING NUMBERS
// let targetNum = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

//condition
// while (guess !== targetNum){
//     console.log(`Guessed ${guess}...NOT CORRECT`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Guessed : ${guess} & targetNum: ${targetNum} ...CORRECT GUESS`);


//BREAK KEY WORD
let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(true) {
    guess = Math.floor(Math.random() * 10);
    if(guess === targetNum){
        console.log(`Guessed : ${guess} & targetNum: ${targetNum}...CORRECT`);
    break;
    }
    
}
console.log(`Guessed : ${guess}...INCORRECT`);

//for...of
const soccerTeams = ['Manchester United', 'Chelsea', 'Arsenal', 'Liverpool', 'Tottenham'];
for(let anything of soccerTeams){
    console.log(`${anything}- www.eplteams.com/${anything}`);
}

let str2 = 'femidevs';
console.log(str2);
for (let s of str2){
    console.log(`${s}- i am an iterable`);
}

//NESTED for...of loop
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];
for (let row of magicSquare){
    // console.log(row);
    let total = 0;
    for (let num of row){
        total += num;
    }
    console.log(`Row of ${row} Totals to ${total}`);
}

//LOOPING OVER OBJECTS
const movieReviews = {
    Amadeus : 10,
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8
};

// const rating1 = movieReviews['Arrival'];
// console.log(rating1);

for (let movie of Object.keys(movieReviews)) {
    // console.log(movie); // returns only keys of movieReviews
    let score = movieReviews[movie];
    // console.log(score); // returns ratings of movieReviews
    console.log(`I rated ${movie} ${score}`);
}

// SHOPPING LIST
const shoppingList = {
    Bread : 120,
    Milk  : 80,
    Blueband : 170,
    Coffee : 250,
    Eggs : 430,
    Sugar : 140
}
// console.log(shoppingList['Coffee']);
// const eggs = shoppingList.Eggs;
// console.log(eggs);
// const bread = shoppingList.Bread;
// console.log(bread); //120
// const list = Object.keys(shoppingList); //returns arrays of keys
// console.log(`${list[0]} : ${bread}`);

for (let list of Object.keys(shoppingList)){
    //console.log(list);// returns keys
   
    
    let price = shoppingList[list];
    // console.log(price); //returns prices of items
    console.log(`I bought ${list} @ kshs.${price}!!`);
}
let listTotal = `The total of my shopping list is ${shoppingList.Bread + shoppingList.Milk + shoppingList.Coffee + shoppingList.Eggs + shoppingList.Sugar + shoppingList.Blueband}`;
console.log(listTotal);

let sum = 0;
for (let shop in shoppingList){
    // console.log(shop);
    // let newPrice = shoppingList[shop];
    // console.log(newPrice);
    sum += shoppingList[shop];  
    //console.log(sum); // prints sum of each iteration/cycle    
}
console.log(sum);




