// 1. Encapsulation -:
//   -The process of hiding implementation details of an object from other objects. - 
//   A closure is a function that has acces to the variables in its parent scope, even after the parent function has    returned.
//   Can be achieved using closures and the module pattern.

function Person(name, age) {
  let _name = name;
  let _age = age;
  this.getName = function () {
    return _name;
  }

  this.getAge = function () {
    return _age;
  }
}

const person = new Person("kabambe", 25);
console.log(person.getName()); // kabambe
console.log(person._name); // undefined

// ES 2022 Encapsulation 
class Counter {
  #count = 0;

  click() {
    this.#count += 1;
  }
  getCount() {
    return this.#count.toLocaleString;
  }
}

const counting = new Counter();
counting.click();
counting.click();
counting.click();

console.log(counting.getCount());

// Encapsulating data members using var key word
class Employee {
  constructor() {
    var name;
    var rating;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getRating() {
    return this.rating;
  }
  setRating(rating) {
    this.rating = rating;
  }
}

var emp = new Employee();
emp.setName("georgy");
emp.setRating(10);

console.log(`${emp.getName()} ${emp.getRating()}`);

// Encapsulation using pototype
function Student(id, name) {
  var sId = id;
  var sName = name;

  Object.defineProperty(this, "name", {
    get: function () {
      return sName;
    },
    set: function (sName) {
      this.sName = name;
    }
  });

  Object.defineProperty(this, "id", {
    get: function () {
      return this.sId = id;
    },
    set: function (sId) {
      this.sId = id;
    }
  });
}

var stud = new Student(99, "ogolla");
console.log(`${stud.id} ${stud.name}`);