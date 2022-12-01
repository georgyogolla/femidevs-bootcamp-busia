// creating objects - Object literals
const newItems = {
    itemOne : 'people',
    price : 200,
    quantity: 3,
    gender : 'female',
    isAvailable : false,
    100 : 'one hundred'
}; 
console.log(newItems.isAvailable);
console.log(newItems['gender']);
newItems.gender = 'Male';
newItems.femidevs = 'busia';
newItems.price += 1000;
console.log(newItems);

// console.log(newItems);

const student = {
    fname : 'kabambe',
    lname : 'george',
    course : ['biochem', 'art'],
    exams : {
        midterm: 70,
        endterm: 58
    }
}

const finalexam = (`The Average is : ${student.exams.endterm + student.exams.midterm}`);
