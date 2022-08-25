//! ===== Global Scope

// Global variable
let user = 'abraham'


// if (user){
//     // local variable
//     let message = `Welcome ${user}`
//     console.log(message.toUpperCase())
// }

// console.log(message);
// for (initialize, condition, incrementor) {}
 

// let total = 0 //global variable

// for (let i = 0; i < 10; i += 3) {
//     console.log(i);
//     total += i
//     console.log(`the total is: ${total}`)
// }



// for(let i = 10; i >= 0; i--) {
//     console.log(`i is ${i}`);
// }

// const message = 'Hello World'
// console.log(message.length);

// for (let i = 0; i < message.length; i++){
//     console.log(message[i])
// }

// for (let i = message.length -1; i >= 0; i--){
//     console.log(message[i])
// }

// console.log(message[message.length -1])


// for(let i = 0; i <= 10; i++){
//     console.log(i);

//     if (i % 2 === 0){
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

// for(let i = 3; i <= 10; i++){
    
//     if(i === 5){
//         console.log('before continue');
//         continue
//         console.log('after cont');
//     } else if (i === 5){
//         break
//     }
    
//     // console.log(`${i} * 2 = ${i * 2}`);
//     console.log(`${i}`);
// }

// const word = 'app le'
// let reversed = ''

// [4] o
// [3] l
// [2] l
// [1] e
// [0] H

// for (let i = word.length -1; i >= 0; i--) {
//     if (word[i] === ' '){
//         continue
//     }
//     reversed += word[i]
//     console.log(reversed)
// }

// console.log(reversed);


// ===========  WHILE LOOPS ================= //

// initialize, condition, incrementor

// let count = 0
// let isNotDoneCounting = false

// while(isNotDoneCounting || count < 10){
//     console.log(`The count is: ${count}`)

//     if (count === 5){
//         isNotDoneCounting = false
//     }
//     count++
// }

// let lives = 3
// let time = 10

// while(lives > 0 && time > 0){
//     console.log('Playing the game....')
//     console.log(`Time left ${time} and Lives left: ${lives}`);

//     if (lives === 0) {
//         console.log('Game Over');
//     }

//     if (time % 2 === 0){
//         console.log('You Lose one live!');
//         lives--
//     } 
    
//     time--

// }

// console.log('Go to Main Menu!');


let message = "12673.526"

// === For Loop
// for (let i = 0; i < message.length; i++){
//     console.log(message[i])
// }

// ==== For Of Loop
// for (value of message){
//     console.log(value);
// }

// Do While Loop - they run at least once!
let i = 0
do {
    console.log('Do while');
    i--
} while(i > 0)