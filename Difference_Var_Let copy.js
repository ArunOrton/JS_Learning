// ////////////////////////////////////
// // linking a javascript file
// // <script src="something.js"></script>
 
// // let js = "amazing"
// // console.log(js)
// ////////////////////////////////////
 
// ////////////////////////////////////
// // // values and variables
// // console.log("Mritunjay")
// // console.log(23)
 
// // let firstName = "Mritunjay"
// // console.log(firstName)
// // console.log(firstName)
// // console.log(firstName)
// ////////////////////////////////////
 
// ////////////////////////////////////
// //variables and naming convention
// // let mritunjay_upadhyay = "MU"
// // let $function = 27
 
// // let person = "Mritunjay"
// // let pi = 3.1415
 
// // let myFirstJob = "Quality Assurance"
// // let myCurrentJob = "Coder"
 
// // // bad way of writing
// // let job1 = "Quality Assurance"
// // let job2 = "Coder"
 
// // console.log(myFirstJob)
// ////////////////////////////////////
 
// ////////////////////////////////////
// // Data Types
// // let javascriptIsFun = true
// // console.log(javascriptIsFun)
 
// // console.log(typeof true)
// // console.log(typeof javascriptIsFun)
 
// // javascriptIsFun = 'Yes!'
// // console.log(typeof javascriptIsFun)
 
// // let year
// // console.log(year)
// // console.log(typeof year)
 
// // year = 1991;
// // console.log(typeof year)
 
// //console.log(typeof null)
// // number, string, boolean, Null, Undefined, Symbol, object, bigint
// ////////////////////////////////////
 
// ////////////////////////////////////
// ////////////////////////////////////
// // Basic Operators
// // Math operators
// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);
 
// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
 
// // const firstName = 'Mritun';
// // const lastName = 'jay';
// // console.log(firstName + ' ' + lastName);
 
// // // Assignment operators
// // let x = 10 + 5; // 15
// // x += 10; // x = x + 10 = 25
// // x *= 4; // x = x * 4 = 100
// // x++; // x = x + 1
// // x--;
// // x--;
// // console.log(x);
// ////////////////////////////////////
 
// ////////////////////////////////////
// // comparison Operators
// // console.log(ageJonas > ageSarah) // >,<,<=,>=
// // console.log(ageSarah >= 18)
// // const isFullAge = ageSarah >= 18;
// // console.log(now - 1991 > now - 2018);
// ////////////////////////////////////
 
// ////////////////////////////////////
// // Strings and Template literals
// // const firstName = 'Mritunjay'
// // const job = 'Developer'
// // const birthYear = 1999
// // const currentYear = 2023
 
// // const mritunjay = "I am " + firstName + ", a " + job + " and I am " + (currentYear - birthYear) + " years old"
// // console.log(mritunjay)
 
// // // template literals
// // const mritunjayNew = `I'm ${firstName}, a ${job} and I'm ${currentYear - birthYear} years old`
// // console.log(mritunjayNew)
 
// // console.log(`Backticks also work with strings`)
// // // with \n\ you can use multiple lines and it's a bug
// // console.log('String with \n\
// // multiple \n\
// // lines')
 
// // // but you can use `` which also works the same
// // console.log(`string
// // with
// // multiple
// // lines`)
// ////////////////////////////////////
 
// ////////////////////////////////////
// // Type Conversion and Coercion
// // type conversion
// // const inputYear = '1991'
// // console.log(Number(inputYear), inputYear)
// // console.log(Number(inputYear) + 18)
 
// // console.log(Number('Mritunjay'))
// // // a string which is not an actual number will result in giving a value called NaN which is not a number
// // console.log(typeof NaN) // meaning invalid number
 
// // console.log(String(23), 23) // converting a number to string
 
// // // Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another.
 
// // console.log('I am ' + 23 + ' years old')
// // // "+ 23 +" this is type coercion
 
// // console.log('23' - '10' - 3)
// // // strings are converted to numbers only if it's substraction
 
// // console.log('23' + '10' + 3)
// // // here it will be concatinated
 
// // console.log('23' * '10' * 3)
// // // here it will be multiplied
 
// // console.log('23' / '10' / 3)
// // // here it will be divided
 
// // let n = '1' + 1
// // n = n - 1
// // console.log(n)
// ////////////////////////////////////
 
// ////////////////////////////////////
// // Truthy and Falsy Values
// // 5 falsy values: 0, '', undefined, null, NaN
// // falsy values are values that are not exactly false,
// // but will become false when we try to convert them into
// // a boolean.
// // So, values that will be converted to true, for example,
// // any number that is not zero or any string that is not an
// // empty string will be converted to true when we attempt to convert them into boolean.
 
// // console.log(Boolean(0))
// // console.log(Boolean(undefined))
// // console.log(Boolean('Mritunjay'))
// // console.log(Boolean({}))
// // console.log(Boolean(''))
 
// // conversion to boolean is always implicit, not explicit
// // or it's type coercion that javascript does behind the scenes.
 
// // const money = 100
// // if (money) {
// //     console.log("Don't spend it all! ")
// // } else {
// //     console.log("You should get a job! ")
// // }
 
// // let height = 0
// // if (height) {
// //     console.log('Yay! Height is defined')
// // } else {
// //     console.log('Height is UNDEFINED!')
// // }
 
// // if expression is already having a type corecion
// ////////////////////////////////////
 
// ////////////////////////////////////
// // Equality Operators: == vs. ===
 
// // const age = '18'
 
// // if (age === 18) console.log('You just became an adult! Strict quality example')
 
// // if (age == 18) console.log('You just became an adult! Loose Equality example')
 
// // // === strict equality operator because it does not perform type coercion
// // // It checks whether two operands are equal, returning a Boolean result. Unlike the equality operator always considers operands of different types different.
 
// // // prompt is used for taking input from users
// // const favourite = Number(prompt("Whats your favourite number?"))
// // console.log(favourite)
// // console.log(typeof favourite)
 
// // if (favourite === 23) {
// //     console.log('Cool 23 is an amazing number')
// // } else if (favourite === 7) {
// //     console.log('7 is also a cool number')
// // } else if (favourite === 9) {
// //     console.log('7 is also a cool number')
// // } else {
// //     console.log('Number is not 23 or 7')
// // }
 
// // // different operator != // Strict different operator !==
// // if (favourite !== 23) console.log("Why not 23? It's a cool number")
// ////////////////////////////////////
 
// ////////////////////////////////////
// // Boolean logic
// // true and false values
// // Using AND(true when All is true) operator true-true->true, true-false->false, false-true->true, false-false->false
// // A AND B
 
// // using OR(true when ONE is true) operator trur-true->true, true-false->true, false-true->true, false-false->false
// // NOT operator Inverts true/false value.
// // A or B
 
// //A: Age is greater or equal 20 false
// //B: Age is less than 30
// //!A !B
 
// // Logical Operators
// ////////////////////////////////////
// const hasDriversLicense = true
// const hasGoodVision = true
 
// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)
 
// const shouldDrive = hasDriversLicense && hasGoodVision
 
// // if (shouldDrive) {
// //     console.log('Sarah is able to drive!')
// // } else {
// //     console.log('Someone else should drive!')
// // }
 
// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired)
 
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive!')
// }
 
// ////////////////////////////////////
// // switch statement
// // const day = 'Monday'
 
// // switch (day) {
// //     case 'Monday': // day ==='monday'
// //         console.log('Plan course structure')
// //         console.log('Go to coding meetup')
// //         break;
// //     case 'Tuesday':
// //         console.log('Prepare theory videos')
// //         break;
// //     case 'Wednesday':
// //     case 'Thursday':
// //         console.log('Write code examples')
// //         break;
// //     case 'Friday':
// //         console.log('Record Videos')
// //         break;
// //     case 'Saturday':
// //     case 'Sunday':
// //         console.log('Enjoy the weekend :D')
// //         break;
// //     default:
// //         console.log('Not a valid day!')
// // }
 
// // if (day === 'Monday') {
// //     console.log('Plan course structure')
// //     console.log('Go to coding meetup')
// // } else if (day === 'Tuesday') {
// //     console.log('Prepare theory videos')
// // } else if (day === 'Wednesday' || day === 'Thursday') {
// //     console.log('Write code examples')
// // } else if (day === 'Friday') {
// //     console.log('Record Videos')
// // } else if (day === 'Saturday' || day === 'Sunday') {
// //     console.log('Enjoy the weekend :D')
// // } else {
// //     console.log('Not a valid day!')
// // }
 
// ////////////////////////////////////
 
// ////////////////////////////////////
// // statements and expressions
 
// ////////////////////////////////////
 
// ////////////////////////////////////
// // conditional operator
 
// // const age = 23;
// // age >= 18 ? console.log('I like to drink coke') : console.log('I like to drink pepsi')
 
// // age >= 18 ? 'coke' : 'pepsi'
 
// // let drink2
// // if (age >= 18) {
// //     drink2 = 'Coke'
// // } else {
// //     drink2 = 'Pepsi'
// // }
// // console.log(drink2)
 
// // console.log(`I don't like to drink ${age >= 18 ? 'coke' : 'pepsi'}`)
 
// ////////////////////////////////////

 

   