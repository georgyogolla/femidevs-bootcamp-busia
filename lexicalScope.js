// function outer(){
//     let hero = 'Black Panther';

//     function inner(){
//     let cryForHelp = `${hero}, please save me!`;
//     console.log(hero);
//     console.log(cryForHelp);
//     }
//     // console.log(hero);
//     // inner();
// }
// // outer();
// console.log(hero);


//RETURNING FUNCTIONS IN FUNCTIONS
function makeBetweenFunc(min, max){
    return function (val){
        return val >= min && val <= max;
    }
}

const inAgeRange = makeBetweenFunc(18, 100);

console.log(inAgeRange(17));

console.log(inAgeRange(30));

//HOISTING
console.log(sq(5));
function sq(n){
    return n * n;
};





