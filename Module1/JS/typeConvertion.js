let value;

let num1 = 12
let num2 = 30

// ==== Different values to String
value = String(num1) // number
value = String(2+2) // number operation
value = String(true) // boolean
value = String( [1,2,3,3,3,3,3] ) // array


// ==== String to a number
value = Number('1242')
value = parseInt('8364863')
value = parseFloat('8364.863')

value = parseInt('5e1')

// parseInt()  =  NaN
// parseInt(null) = NaN
// parseInt(true) = NaN
// parseInt('') = NaN
// parseInt('32px') = 32
// parseInt('5e1') = 5

// ==========================

// Number() = 0
// Number(null) =  0
// Number(true) = 1
// Number('') = 0
// Number('32px') = NaN
// Number('5e1') = 50

value = Number('5e3')



console.log(value);