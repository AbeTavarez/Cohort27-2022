// let isUserLoggedIn = false

// // verify password
// //if passwords matched
// isUserLoggedIn = true

// if (isUserLoggedIn) {
//     console.log('Welcome')
// } else {
//     console.log('Please log in!');
// }


// let num = 99

// if (num >= 0){
//     console.log('Positive Number');

//     if (num > 100){
//         console.log(num);
//         console.log('Number is greater then 100');
//     } else {
//         console.log('Number is NOT greater then 100');
//     }

// } else {
//     console.log('Negative Number');
// }


// let grade = 54

// if (grade >= 90){
//     console.log('A');
// }

// if (grade >= 80){
//     if(grade <= 89){
//         console.log('b');
//     }
// }

// if (grade >= 70){
//     if(grade <= 79){
//         console.log('C');
//     }
// }

// if (grade >= 55){
//     if (grade <= 69){
//         console.log('D');
//     }
// } else {
//     console.log('F');
// }


// let grade = 89.58

// if (grade >= 90){
//     console.log('A!');
// } else if (grade >= 80 && grade < 90){
//     console.log('B!');
// } else if (grade >= 70 && grade < 80){
//     console.log('C!');
// } else if (grade >= 55 && grade < 70){
//     console.log('D!');
// } else {
//     console.log('F!');
// }


// let age =  Math.floor( Math.random() * 30)
// console.log(age)

// if (age >= 18 && age < 21){
//     console.log('older than 18');
// } else if (age < 18){
//     console.log('younger than 18');
// } else if (age >= 21){
//     console.log('adult');
// }

// Logical OPs

let num1 = 10
let num2 = 30

if (num2 === 30 || num1 > 15){
    console.log('it works!');
}

let javascriptISFun = true

console.log( !javascriptISFun);

// Ternary Op

const userInput = 'user83'

const dbUserName = 'user83'

const loggedInUser = userInput === dbUserName ? `Hello ${dbUserName}` : `Please check your username`

console.log(loggedInUser);