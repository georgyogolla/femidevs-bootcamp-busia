function grumpus(){
    console.log(1);
    console.log(2);
    console.log(3);
}
grumpus();
grumpus();
grumpus();

function greet(names){
    console.log(`Hello, ${names}`);
}
greet('George');

//find an average of numbers
function avg(arr){
    let sum = 0;
    for(let num of arr){
        sum += num; 
    }
    let average = sum / arr.length;
    console.log(average);//15
}
avg([1, 2, 3, 4, 5]);

//find largest number
function findLargest(x, y){
    if(x > y){
        console.log(`${x} is larger`);
    }
    else if(x < y){
        console.log(`${y} is larger`)
    }
    else {
        console.log(`${x} and ${y} are equal `);
    }
}
findLargest(6, 6);