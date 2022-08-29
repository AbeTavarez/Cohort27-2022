// ===== Exercise 1

function computeArea(width, height){
    console.log('its running!');
    const area = width * height
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
}

// computeArea(5, 3)
// console.log(computeArea()) // show you the value
// const rect1 = computeArea(5,2) // store the value
// console.log(rect1);

// ===== Exercise 2

const planetHasWater = function(planet){
    planet = planet.toLowerCase() // re-assign the value of planet with all lower case
    
    if (planet === 'earth' || planet === 'mars'){
        return true;
    } else {
        return false
    }
}

// const planetEarth = planetHasWater('Mars')
// console.log(planetEarth);

/// ===== Exe3

function addTwo(num){
    return num + 2
}

console.log(addTwo(8))

/// ===== Exe 4
function sayHello(name = 'Guest'){
    return `Hi, ${name}`
}

console.log( sayHello() ); // using the default value
console.log( sayHello('Rob') ); // passing an argument
console.log( sayHello('Tom'));

// ===== Exe 5
const wereAwesome = (myName, classmateName) => `${classmateName} and ${myName} are awesome!`

const message = wereAwesome('Abe', 'Anna')
console.log(message);

// ==== exe 6
const addS = str => str + 's'

function addS1(str){
    return str + 's'
}

console.log(addS('Apple'));
console.log(addS1('Banana'));

// exe 7
const isOdd = function(num){
    // 5 / 2 will have a reminder of 1: it's an odd number
    if (num % 2 === 1){
        return true
    } else {
        return false
    }
}

console.log(isOdd(5));
console.log(isOdd(2));

// ==== Challenges

// reverse string
// apple
const reverseString = (str) =>{
    let reverseStr = '' // pace holder for the reversed string

    // loop for as long as we have characters in the string
    for(let i = str.length -1; i >= 0; i--){
        reverseStr += str[i] // concat the current character to the variable
    }

    return reverseStr
}

console.log( reverseString('banana'));

// ==== capitalize string
// apple
//banana
const capitalizeString = str => str.at(0).toUpperCase() + str.substring(1)

function capitalizeStr(word){
    return word[0].toUpperCase() + word.substring(1)
}

console.log(capitalizeString('apple'))
console.log(capitalizeStr('banana'))