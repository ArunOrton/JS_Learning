// Object.keys()
// Description: Returns an array of a given object's property names.
const person = { name: 'Alice', age: 25, city: 'New York' };
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']

// Object.values()
// Description: Returns an array of a given object's property values.
const values = Object.values(person);
console.log(values); // Output: ['Alice', 25, 'New York']


// Object.entries()
// Description: Returns an array of a given object's own enumerable string-keyed property [key, value] 
const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'Alice'], ['age', 25], ['city', 'New York']]


//-----------------------
// Object.assign()
// Description: Copies the values of all enumerable own properties from one or more source objects
//  to a target object. It will return the target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }

// Object.freeze()
// Description: Freezes an object. A frozen object can no longer be changed; freezing an object prevents 
// new properties from being added to it, existing properties from being removed, 
// prevents changing the enumerability, configurability, or writability of existing properties, 
// and prevents the values of existing properties from being changed.
const obj = { name: 'Alice' };
Object.freeze(obj);
obj.name = 'Bob'; // This will not work
console.log(obj.name); // Output: 'Alice'


// Object.seal()
// Description: Seals an object, preventing new properties from being added to it 
// and marking all existing properties as non-configurable. Values of present properties can still be
// changed as long as they are writable.
const obj = { name: 'Alice' };
Object.seal(obj);
obj.name = 'Bob'; // This will work
delete obj.name;  // This will not work
console.log(obj.name); // Output: 'Bob'

// Object.fromEntries()
// Description: Transforms a list of key-value pairs into an object. 
// This is the inverse of Object.entries.
const entries1 = [['name', 'Alice'], ['age', 25], ['city', 'New York']];
const obj = Object.fromEntries(entries1);
console.log(obj); // Output: { name: 'Alice', age: 25, city: 'New York' }

// Combining Object Functions
// You can also combine these functions for more complex operations. 
// For example, transforming an object by filtering and modifying its properties:
const personData = { name: 'Alice', age: 25, city: 'New York', occupation: 'Engineer' };
// Create a new object with properties that have string values only
const filteredPerson = Object.fromEntries(
    Object.entries(personData).filter(([key, value]) => typeof value === 'string')
);
console.log(filteredPerson); // Output: { name: 'Alice', city: 'New York', occupation: 'Engineer' }
