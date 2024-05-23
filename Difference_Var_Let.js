
// ////////////////////////////////////
//  var is function scoped : 
//  let blocked scoped
// ////////////////////////////////////

var job = "programmer";
let job2 = "footballer";
lastName = "Schmedtmann";

function demo() {
    if (true) {
      var x = 10; // 
      let y = 11; // 
      console.log(y) // print as 11
    }
    console.log(x); // print as 10
    //console.log(y);// throw an "y is not defined" error
}


console.log(job);
console.log(job2);
console.log(lastName);
 
function demo2() {
  let job3 = "cricketer";
  var name2 = "Mohammed";
  console.log(job3); //print : cricketer
  console.log(name2); //print : Mohammed
  console.log(job); //print : programmer
  console.log(job2); //print : footballer
}

demo2();
console.log(name2) // throw an name2 is not defined error
console.log(job); //print : programmer
console.log(job3); // throw an job3 is not defined error
//demo();

console.log(x); // throw an "x is not defined" error
   