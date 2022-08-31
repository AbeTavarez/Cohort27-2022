

const subtractTwo = (num) =>{
    return num -2
}
const addTwo = (num) =>{
    return num +2
}

const recreateMap = (array, callback) => {
    const newArray = [] 
    for (let i = 0; i < array.length; i++){
        const result = callback(array[i])
        newArray.push(result)
    }
    return newArray
}

// ADD CODE HERE

// Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof recreateMap); // should log: 'function'
// console.log(recreateMap([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
// console.log(recreateMap([3,4,5], addTwo)); // should log: [ 1, 2, 3 ]


//
function clean(item) {
    console.log(`I just cleaned a ${item}`)
}
  
const nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]
  
for (let i = 0; i < nails.length; i++) {
    clean(nails[i])
}
  


// =========== ForEach Challenge

const recreateForEach = (array, callback) => {
    // loop over the array
    // call the callback on each of the element inside the array
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];

recreateForEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'