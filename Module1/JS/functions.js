// sayHello()

// Function Definition
function sayHello(){
    console.log('Hello...')
}

// 
const greeting = function(){
    console.log("Hello World!");
}
// greeting()

// function execution
function multiply(num1, num2){
  return num1 * num2
}


const result = multiply(2, 10)
// console.log(result)

// Arrow Functions
const multiplyByTwo = num => num * 2

const multiply2 = (num1, num2) => num1 * num2

const multiply3 = (num1, num2) => {
    return num1 * num2
}

console.log(multiply3(2,2));

const result1 = multiplyByTwo(4)

console.log(result1);

