let str_charAt = "Hello, World!";
console.log(str_charAt.charAt(0)); // Output: "H"

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2)); // Output: "Hello, World"

let str_includes = "Hello, World!";
console.log(str_includes.includes("World")); // Output: true
console.log(str_includes.includes("world")); // Output: false

let str_include = "Hello, World!";
console.log(str_includes.include("World")); // Output: true
console.log(str_includes.include("world")); // Output: false

let str_indexOf = "Hello, World!";
console.log(str_indexOf.indexOf("World")); // Output: 7
console.log(str_indexOf.indexOf("world")); // Output: -1

let str_replace = "Hello, World!";
let newStr = str_replace.replace("World", "Universe");
console.log(newStr); // Output: "Hello, Universe!"

let str_slice = "Hello, World!";
console.log(str_slice.slice(7, 12)); // Output: "World"

let str_split = "Hello, World!";
let arr = str_split.split(", ");
console.log(arr); // Output: ["Hello", "World!"]

let str_substring = "Hello, World!";
console.log(str_substring.substring(7, 12)); // Output: "World"

let str_toLowerCase = "Hello, World!";
console.log(str_toLowerCase.toLowerCase()); // Output: "hello, world!"

let str_toUpperCase = "Hello, World!";
console.log(str_toUpperCase.toUpperCase()); // Output: "HELLO, WORLD!"

let str_trim = "   Hello, World!   ";
console.log(str_trim.trim()); // Output: "Hello, World!"

let str_startsWith = "Hello, World!";
console.log(str.str_startsWith("Hello")); // Output: true
console.log(str.str_startsWith("World")); // Output: false

let str_endsWith = "Hello, World!";
console.log(str_endsWith.endsWith("World!")); // Output: true
console.log(str_endsWith.endsWith("Hello")); // Output: false
