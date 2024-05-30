
// what is Closure?
    // A closure is a function that retains access to its static scope even when the function 
    // is executed outside that scope. Closures are useful in test automation to maintain state 
    // between different test steps or to create utility functions that encapsulate certain test logic.

function createCounter() {
    let count = 0; // This variable is enclosed in the closure
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

function createCounter1() {
    let count = 0; // This variable is enclosed in the closure
   
        count++;
        return count;    
}



const counter1 = createCounter1();

console.log(counter1); // Output: 1
console.log(counter1); // Output: 1
console.log(counter1); // Output: 1

// Usage in test automation
function createTestStep(stepName) {
    let stepCounter = 0;
    return function() {
        stepCounter++;
        console.log(`Executing ${stepName} - step ${stepCounter}`);
    };
}

const loginStep = createTestStep('Login');
loginStep(); // Output: Executing Login - step 1
loginStep(); // Output: Executing Login - step 2



