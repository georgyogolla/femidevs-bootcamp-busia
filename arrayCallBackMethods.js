//forEach - Accepts a callback function.
//Calls the function once per element in the array.
const numbers = [20, 21, 22, 23, 24, 25, 27];
//Print numbers alongside their indexes using forEach.
// forEach allows you to pass in a second parameter in the function.
//the second parameter is the index
numbers.forEach(function(num, idx){
    console.log(idx, num);
})

// Using anonymous function expression:
numbers.forEach(function(n){
    // console.log(n);
    console.log(n * 2);
});

//create a new function and call it inside forEach method
// Using a pre-defined function:

// function printThrice(n){
//     console.log(n *3);
// };

// call printThrice inside forEach
//Good for function reusability
// numbers.forEach(printThrice);


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

// Print book title using forEach
books.forEach(function(book){
    console.log(book.title.toUpperCase());
});

// Print book title using for...of
for(let book of books){
    console.log(book.title.toUpperCase());
};

//difference between forEach and fo...of loop is that :
//forEach - calls in a function 
//for...of loop is just a block

//Print book title using traditional for loop
for(let i = 0; i < books.length; i++){
    console.log(books[i].title.toUpperCase());
}


//map
//creates a new array(from an existing array) with the results of calling a callback on every element
//can duplicate an array
//can be used to extract portions of an array

//EXAMPLES
const newNumbers = [20, 21, 22, 23, 24, 25, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

// Capture the newly returned array in a variable
const doubles = numbers.map(function(num2){
    return num2 * 2;//it will return undefined a bunch of times if you dont  use return
});

//use map to return an object of key : value pairs
//you must return values in a amap because map itself returns a new array
const evenNums = numbers.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
});
console.log(evenNums);


//CREATE AN ARRAY OF ABBREVIATIONS OF WORDS USING map()
const abbrevs = words.map(function(word){
    return word.toUpperCase().split("").join('.')
});
console.log(abbrevs);

//return a new array of books containing only the titles of the books using map()
const titles = books.map(function(b){
    return b.title;
});
console.log(titles);


//DIFFERENCE BETWEEN for...each() and map()
//for...each doesn't return anything
//map returns a new array which is then caputred in a avariable


//ARROW FUNCTIONS
//Arrow functions behaves just like function expressions
//Syntactically compact way of writing functions without using regular functions
//paranthesis are opitonal only when we have one parameter

// const square = (x) => {
//     return x * x;
// }

// const isEven  = (num) => {
//     return num % 2 === 0;
// }

// const multiply = (x, y) => {
//     return x * y;
// }


//IMPLICIT RETURN IN ARROW FUNCTIONS 
//means that you don't have to use the return keyword
//In some senarios you cna write a one liner arrow functions
//Uses paranthesis in place of calibraces
const square = n => n * n; //one line implicit return in arrow functions
// const square = n => (
//      n * n //no return statement
// );

//ONE LINER ARROW FUNCTIONS
//We don't need paranthesis
//only works for shorter arrays

// const square = n => n * n;

const newNums = [1, 2, 3, 4, 5, 6, 7, 8];

//use regular functions and map to double the nums
// const double = newNums.map(function(n) {
//     return n * 2;
// });

//use map and arrow function to double the nums
//return explicitly
// const double2 = newNums.map(n => {
//     return n * 2;
// });

//use map and arrow function to double the nums
//return implicitly
// const doubles3 = newNums.map(n => n * 2);

//Alternate between 'even' and 'odd'
// const parityList = newNums.map((n) => {
//     if(n % 2 === 0) return 'even';
//     return 'odd'; 
// });

//TERNARY OPERATOR AND ARROW FUNCTIONS
// const parityList = newNums.map( n => n % 2 ===0 ? 'even' : 'odd');

//array.find
//returns the value of the first element in the array that satisfies the provided testing function
//Only returns the first instance of the exact match even if there are other matches
//Very useful when you want to find something based on its ID e.g a web app that contains a list of posts or comments.
//In order to delete a post or a comment you will have to find it first using its ID


//EXAMPLE 1
let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubfire",
    "Mr. Deeds"
];

//find movies that includes "mrs" in them
// const movie = movies.find(movie => {
//     return movie.includes("Mrs");//looks for anything that contains "mrs" and returns the first instance of it
// });
// console.log(movie); //"The Fantastic Mr. Fox",

//USING INDEX OF 
// const movie2 = movies.find(m => {
//     return m.indexOf("Mrs") === 0;
// });
// console.log(movie2);

const newBooks = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
];

//find a book with that has rating greater than 4.3
const goodBook = newBooks.find(b => b.rating >= 4.3);
console.log(goodBook);

//check if certain author exists
const neilBook = newBooks.find(b => b.authors.includes('Neil Gaiman'));
console.log(neilBook);


//FILTER
//Creates a new array witht all elements thatr pass the test implemented by the provided function
//Does not mutate or update the original array
//returns

const filtering = [30, 23, 46, 17, 9, 11, 67, 84];
const oddNumbers = filtering.filter(f => f % 2 === 1);//returning results implicitly
console.log(oddNumbers);

//filter out numbers greater than 40
const bigNums = filtering.filter(f => f > 40);
console.log(bigNums);

//FILTERING LARGE DATA
const moreBooks = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const fantasyBooks = moreBooks.filter(book => {
  return book.genres.includes('fantasy')
});
console.log(fantasyBooks);

// const shortForm = books.filter(book => (
//   book.genres.includes('short stories') || book.genres.includes('essays')
// ));

// console.log(shortForm);

//search if book title has 'The'
const query = 'The';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
});

console.log(results);

//EVERY AND SOME
 //EVERY - tests whether all elements in the array pass the provided function.
 // It returns a boolean value

 const newWords = ['dog', 'dig', 'log', 'bag', 'wag'];
  
 //Check if every word has a length of 3
 const lengthOfWords = newWords.every(word => word.length === 3);
 console.log(lengthOfWords);

 //Check if every word ends in letter g
 const endsInG = newWords.every(word => {
  const lastIdx = word.length - 1;
  return word[lastIdx] === 'g';
 });
 console.log(endsInG);

 //SOME
 //Similar to evry but returns true if ANY of the array elements pass the test function

 const someWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

 //check if there are any words having more than  4 characters
 const moreThanFour = someWords.some(w => {
  return w.length > 4;
 });
 console.log(moreThanFour);

 //check if any words starts with letter Z
 const startsWithZ = someWords.some(W =>  W[0] === 'z'); //implicit return
 console.log(startsWithZ);

 //Check if any words contains the word 'cake'
 const containsCake = someWords.some(w => w.includes('cake'));
 console.log(containsCake);

 //REVISITING SORT
 const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
 console.log(prices.slice().sort());//converts all the numbers to string then sorts them using the first character

 //USING COMPARE FUNCTION TO SORT NUMBERS
 // if compareFunc(a, b) returns less than 0,
 // - sort a before b
 // if compareFunc(a, b) returns 0,
 // - leave a and b unchanged with respect to each other
 // if compareFunc(a, b) returns greater than 0
 // - sort b before a
 // SORT IS ONE OF THE FEW ARRAY METHODS THAT MUTATES THE ORIGINAL ARRAY
 // DUPLICATE AN ARRAY OF NUMBERS USING SLICE IN DIFFERENT VARIABLES IN ORDER TO SORT THEM DIFFERENTLY
 

 //Sort numbers in ascending order

 const sort1 = prices.slice().sort((a, b) => a - b);
 console.log(sort1);

 //descending order
 const sort2 = prices.slice().sort((a, b) => b - a);
 console.log(sort2);

 //SORTING COMPLEX DATA
 const sortBooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
];

//sort books using their ratings
//Just mutate books array if you dont care about the original array
const sortedBooks = sortBooks.sort((a, b) => a.rating - b.rating);
console.log(sortedBooks);


// REDUCE
// Executes a reducer function on each element of the array,
// resulting in a single value 
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((accumulator, currentVal) => {
  return accumulator * currentVal;
});
console.log(product);

//Finding the maximum value in an array using REDUCE
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

//RETURNING MAXIMUM VALUE USING REDUCE
const maxGrades = grades.reduce((max, currVal) => {
  if(currVal > max) return currVal;
  return max;
});    
console.log(maxGrades);

//USING Math.max to return maximu value in ana array
const maximumGrades = grades.reduce((max, currVal) => {
  return Math.max(max, currVal);
}); 
console.log(maximumGrades);

//USING Math.min to return minimum value in an array
const minGrades = grades.reduce((min, currVal) => (
  Math.min(min, currVal)
)); 
console.log(minGrades);

//USING REDUCE TO GROUP VOTES IN AN OBJECT
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// const result = votes.reduce((tally, val) => {
//   if(tally[val]){
//     tally[val]++; //if a tally exist then add 1 to the existing tally
//   } else {
//     tally[val] = 1; // if a tally doesn't have a value then assign 1 to it
//   }
//   return tally;
// }, {});
// console.log(result);

//USING LOGICAL OPERATOR WITH REDUCE
const result2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1; //
  return tally;
}, {});
console.log(result2);


const reduceBooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'A Truly Horrible Book',
  authors: ['Xavier Time'],
  rating: 2.18,
  genres: ['fiction', 'garbage']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]

//GROUP BOOKS BY RATINGS
// const bookRatings = reduceBooks.reduce(groupedBooks, book) => {
//   const key = Math.floor(book.rating); 
// }