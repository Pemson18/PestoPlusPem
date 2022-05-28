// defining a global variable
var lastName = 'global_name';

const func1 = function(firstName) {
    return firstName + " " + this.lastName; /** the value of 'this' 
    is defined how we call the function */
}

// this object is passed as the first argument to the call method
var person1 = {
    lastName: 'person_name'
}

// calling the function usually
console.log(func1('Pemson')); // Pemson global_name

/** calling the function using the call method and setting the 
'this' value to the 'person' object */
console.log(func1.call(person1, 'Pemson')); // Pemson person_name

// using call method without passing the first argument
console.log(func1.call()); // undefined global_name

// passing the first argument as null or undefined
console.log(func1.call(null, 'Pemson')); // Pemson global_name
console.log(func1.call(undefined, 'Pemson')); // Pemson global_name

/******************** in strict mode*****************/
console.log(func1.call()); /** Cannot read property 'lastName' of undefined*/
console.log(func1.call(null, 'Pemson')); /** Cannot read property 'lastName' of null*/
console.log(func1.call(undefined, 'Pemson')); /** Cannot read property 
'lastName' of undefined*/

var name = 'Pemson';

const func2 = function (age, hobby) {
  return (this.name + ' is ' + age + ' years old and his hobby is '
  + hobby);
};

var person2 = {
    name: 'John'
}

func2();
console.log(func2()); /** Pemson is undefined years old and his 
hobby is undefined*/
func2.apply();
console.log(func2.apply()); /** Pemson is undefined years old and his 
hobby is undefined*/

console.log(func2() === func2.apply()); /** true*/

console.log(func2('15', 'writing')); /** Pemson is 15 years old and his 
hobby is writing*/
console.log(func2.apply(undefined, ['15', 'writing'])); /** Pemson is 15 years 
old and his hobby is writing*/
console.log(func2.apply(null, ['15', 'writing'])); /** undefined is 15 years 
old and his hobby is writing*/

/********* changing 'this' to 'person' object*********/
console.log(func2.apply(person2, ['20', 'music'])); /** John is 20 years 
old and his hobby is music*/

/**************** strict mode ***************/
/** Cannot read property 'name' of undefined*/
console.log(func2()); 
console.log(func2('15', 'writing')); 
console.log(func2.apply());
console.log(func2.apply(undefined, ['15', 'writing']));

/** Cannot read property 'name' of null */
console.log(func2.apply(null, ['15', 'writing']));
// defining a person object
/** this object has a property 'age' and a method 
'getNameAndAge' */
const person3 = {
  age: 42,
  getNameAndAge: function(name) {
      return name + ' ' + this.age;
  }
}

// calling the method on the 'person' object directly
person3.getNameAndAge('Pemson'); // Pemson 42

// assigning the reference of the method to variable nameAndAge
const nameAndAge = person3.getNameAndAge;

// calling the function assigned to nameAndAge by referencing it 
console.log(nameAndAge('Pemson'));; /** Pemson undefined (the function gets
invoked at the global scope)*/

// use of bind method
const boundNameAndAge1 = nameAndAge.bind(person3, 'Pemson');
console.log(boundNameAndAge1()); /** Pemson 42 (bind method creates
a new function and bounds 'this' value to 'person' object)*/

// bind without any arguments
const boundNameAndAge2 = nameAndAge.bind();
console.log(boundNameAndAge2('Pemson')); // Pemson undefined

// setting 'this' to 'undefined'
const boundNameAndAge3 = nameAndAge.bind(undefined, 'Pemson'); 
console.log(boundNameAndAge3()); // Pemson undefined

// setting 'this' to 'null'
const boundNameAndAge4 = nameAndAge.bind(null, 'Pemson'); 
console.log(boundNameAndAge4()); // Pemson undefined