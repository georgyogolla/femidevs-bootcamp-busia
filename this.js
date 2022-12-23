//shorthan objet properties
const name = 'John';
const age = 30;
const user = {
  name,
  age,
};
console.log(user);

//example 2
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((acc, num) => acc + num);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg,
  };
}
const reviews = [4.5, 5.0, 3.0, 3.5, 2.5];
const stats = getStats(reviews);
console.log(stats);

//COMPUTED PROPERTIES
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Diector';
const person2 = 'Georgy Kabambe';

const team = {
  [role]: person,
  [role2]: person2,
  [1 + 5 + 10]: 'fifteen'
}
console.log(team);

//example 3
// function addProp(obj, k, v) {
//   const copy = {
//     ...obj
//   };
//   copy[k] = v;
//   return copy;
// }

//USING ARROW FUNCTIONS
const addProp = (obj, k, v) => {
  return {
    ...obj,
    [k]: v
  }
}
const res = addProp(team, 'happy', ':)');
console.log(res);

//ADDING METHODS TO OBJECTS
const math = {
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  }
};
const sum = math.add(2, 5);
console.log(sum);

//METHOD SHORTHAND SYNTAX
const auth = {
  username: 'Kabambe',
  login() {
    console.log('LOGGED YOU IN!!');
  },
  logout() {
    console.log('GOODBYEEEE!!');
  }
}
const getToSystem = auth.login();
console.log(getToSystem);

//KEYWORD "THIS"
// Returns an object
//window is a global object 
//when you call the function sayHi , it is added as a property to the window object 
//"this" is a reference to an object and that object represents curent execution scope
function sayHi() {
  console.log('hello');
  //"this" key word in a regular function refers to the global scope object "window" in the browser but in nodejs it refers to something else.
  console.log(this);
}
const globalObject = sayHi();
console.log(globalObject);

//USING "this" in methods
const people = {
  first: 'Ogolla',
  last: 'George',
  nickName: 'Kabambe',
  fullName() {
    //"this" in this case represents the curent object which is "people".
    //it allows us to reference/access the properties and other methods available within he current object
    // console.log(this);

    console.log(`${this.first} ${this.last} AKA ${this.nickName}`);


    //DESTRUCTURE THE ABOVE CODE
    const {
      first,
      last,
      nickName
    } = this;
    //retun a value here 
    return (`${first} ${last} AKA ${nickName}`);
  },
  printBio() {
    //store the value returned frrom fullName and use it to add bio to the fullName
    const bioGraphy = this.fullName();
    console.log(`${bioGraphy} is a young handsome man`);
  }
}

//"this" invoation context
//the value of "this" can sometimes vary depending on how you call the function
