// Destructuring

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Objects
const user = {
    name: 'Abe',
    age: 30,
    cohort: '27',
    isStudent: true
}

// const name = user.name
// const age = user.age
// user.newPropName = 'something'

const {isStudent, name, age, cohort } = user;

console.log(name);
console.log(age);
console.log(cohort);
console.log(isStudent);

// Arrays
const devs = ['kelvin','zoraida', 'nelia', 'norman' ]

const [dev1, dev2, dev3, dev4] = devs

console.log(dev1);


// function
const hook = () => {
    const hookName = 'stateString'
    const hookSetter = () => {}
    return [hookName, hookSetter]
}

const [state, setState] = hook()
// console.log(state);
// console.log(setState);