// Array declaration

const colors = ["red", 'blue','green']

const users = ['abe', 'alex', 'anna']

const movies = ['Bad boys', 'transformers', 'Casino', 'Caddyshack', 'Interstellar', 'Scarface']

// console.log( movies.length );
// console.log( movies.at(-1) );
// console.log( movies[movies.length - 1] );

const top10 = []

top10.push('Royal 007') // push an element to the end of the array
top10.push(movies[2])

top10.unshift('Star Wars') // unshift add an element to the beginning of the array

// console.log(top10);

const movieOfTheYear = top10.shift()
const lastMovie = top10.pop()

// console.log(movieOfTheYear);
// console.log(lastMovie);

// console.log(top10);


// ======== Splice // mutates the array
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb') // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

let march = months.indexOf('March')
// console.log('index of march -> ',march);

months.splice(march, 1, 'MARCH')

months.splice(-1, 1, 'May')
// console.log(months);


// ===== Slice // will NOT mutate the array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const firstTwo = animals.slice(0, 2)
// console.log(firstTwo);
// console.log(animals);


// ===== Lopping over Arrays
const newMovies = ['Bad boys', 'transformers', 'Casino', 'Interstellar', 'Scarface']


// const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]
const total = []

const multiplyByTwo = (num) => {
    return num * 2
}

// for (let i = 0; i < numArr.length; i++){
//     const result =  multiplyByTwo(numArr[i])
//     total.push(result)
// }

// console.log(total);



// const oddEvenNumbers = []

// for (let i = 0; i < numArr.length; i++){
//     // loop over the array
//     if (numArr[i] % 2 === 1){
//         // add all the odd numbers to the beginning of oddEvenNumbers
//         oddEvenNumbers.unshift(numArr[i])
//     } else if (numArr[i] % 2 === 0){
//         // add all the even numbers to the end of oddEvenNumbers
//         oddEvenNumbers.push(numArr[i])
//     }
//     console.log(`Iteration ${i}:`, oddEvenNumbers);
// }

// console.log(oddEvenNumbers);




// const evenNumbers = []
// const oddNumbers = []

// for (let i = 0; i < numArr.length; i++){
//     if (numArr[i] % 2 === 0){
//         evenNumbers.push(numArr[i])
//     } else {
//         oddNumbers.push(numArr[i])
//     }
// }

// console.log(evenNumbers);
// console.log(oddNumbers);


const latestShows = [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]


// latestShows.forEach( (show) => { 
//     console.log(show.toUpperCase()) 
// })


const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]

// numArr.forEach((num, i) => {
    //     console.log(`${numArr[i]} is at index: ${i} `)
    // })
    
const increaseByTwo = [1, 2, 3, 4, 5];

// forEach can mutate the original array
increaseByTwo.forEach((num, i) => {
    increaseByTwo[i] +=2 // mutates the original array
    num += 2 // will NOT mutate the original array
})


// The map method returns a new array
const newArr = increaseByTwo.map((num) => {
    return num + 2
})

// console.log(increaseByTwo);
// console.log(newArr);
