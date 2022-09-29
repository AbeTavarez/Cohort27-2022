// Spread Operator ...

// === Arrays
const firstArr = [1,2,3]
// console.log(firstArr)

// Copy of the firstArr
const firstArrCopy = [...firstArr]
firstArrCopy.push(7,8,9,10)
// console.log(firstArrCopy);

const secondArr = [4,5,6, ...firstArr]

// console.log(secondArr);

// === Objects

const user = {
    name: 'Abe',
    age:30
}

const superUser = {
    ...user,
    isSuperUser: true
}

// console.log(superUser);

// Rest Operator ...

const sortNums = (...values) => {
    // console.log(values);
    return values.sort()
}

// console.log( sortNums(34,85,3,2,54,65) );

const sum = (...args) => {
    console.log(args);
    return args.reduce((acc, item) => acc + item)
}

console.log( sum(1,2,3,4,5,88));