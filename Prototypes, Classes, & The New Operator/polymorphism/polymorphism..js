// Polymorphism -:
// -The pracatice of designing objects to share behaviors and to be able to override shared behaviors with specific ones

function Person(age, weight) {
  this.age = age;
  this.weight = weight;
}

// Give person the ability to share their information
Person.prototype.getInfo = function () {
  return `I am ${this.age} years old and weighs ${this.weight} kg`
}

// sub-class of a Person, Employee
function Employee(age, weight, salary) {
  this.age = age;
  this.weight = weight;
  this.salary = salary;
}
Employee.prototype = new Person();

// Override the behavior of getInfo by defining one which is more fitting to an Employee
Employee.prototype.getInfo = function () {
  return `I am ${this.age} years old and weighs ${this.weight} kg and earns $${this.salary} `;
}

const person = new Person(50, 90);
const employee = new Employee(40, 75, 90000);

console.log(person.getInfo());
console.log(employee.getInfo());

// 3 types of polymorphism are :-
//   1. hadhoc - an example of this is type coercion - where a change happens without a previous planning
//   2. parametric - this is where a function, object or an array accepts any data type.
//   3. subtype - inheritance - it involves creating derivative objects from a parent object

// Example of a subtype polymorphism : -

class Human {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hello my name is ${name}`;
  }
}

// Create a developer sub-class from human class
class Developer extends Human {
  sayHi() {
    return `Hey, my name is ${name} and i am a developer`;
  }
}

// Create a designer sub-class from human class
class Designer extends Human {
  sayHi() {
    return `Hi, my name is ${name} and i am a designer`;
  }
}

const human = new Human('george');
const developer = new Developer('ogolla');
const designer = new Designer('kabambe');

console.log(human.sayHi());
console.log(developer.sayHi());
console.log(designer.sayHi());