let globalVar = "I'm a global variable";

function outerFunction() {
    let outerVar = "I'm an outer variable";
    
    function innerFunction() {
        let innerVar = "I'm an inner variable";
        console.log(globalVar); // Accessing global variable
        console.log(outerVar);  // Accessing outer variable
        console.log(innerVar);  // Accessing inner variable
    }
    
    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined in this scope
}

outerFunction();
// console.log(outerVar); // Error: outerVar is not defined in this scope
