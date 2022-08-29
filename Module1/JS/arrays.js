// Array declaration

const colors = ["red", 'blue','green']

const users = ['abe', 'alex', 'anna']

const movies = ['Bad boys', 'transformers', 'Casino', 'Caddyshack', 'Interstellar', 'Scarface']

console.log( movies.length );
console.log( movies.at(-1) );
console.log( movies[movies.length - 1] );

const top10 = []

top10.push('Royal 007') // push an element to the end of the array
top10.push(movies[2])

top10.unshift('Star Wars') // unshift add an element to the beginning of the array

console.log(top10);

const movieOfTheYear = top10.shift()
const lastMovie = top10.pop()

console.log(movieOfTheYear);
console.log(lastMovie);

console.log(top10);


// ======== Splice // mutates the array
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb') // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

let march = months.indexOf('March')
console.log('index of march -> ',march);

months.splice(march, 1, 'MARCH')

months.splice(-1, 1, 'May')
console.log(months);


// ===== Slice // will NOT mutate the array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const firstTwo = animals.slice(0, 2)
console.log(firstTwo);
console.log(animals);