const myModule = require('./myModule')
const stringModule = require('./stringModule')
const daysOfTheWeek = require('./daysOfTheWeeks')


console.log( myModule.multiply(2,3) )
console.log( myModule.sum(5,5) );

console.log(stringModule())

const day = daysOfTheWeek.getWeekday(7)
console.log(day);
console.log(daysOfTheWeek.weekdays);