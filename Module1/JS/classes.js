class Vehicle {
    constructor(vin, make, color){
        this.vin = vin
        this.make = make
        this.color = color || 'blue'
        this.isRunning = false
    }

    start(){
        this.isRunning = true
        console.log('Vehicle is running...');
    }

    stop(){
        this.isRunning = false 
        console.log('Vehicle stopped...');
    }

    toString(){
        return `Vehicle ${this.vin} is a ${this.make} and is ${this.color}.`
    }
   
}

const v1 = new Vehicle('xyz123', 'Honda', 'red')
const v2 = new Vehicle('xyz345', 'Ford')
// Vehicle.start() // method will not work here
// console.log(typeof v1);

v1.start()
v2.start()
v1.stop()

console.log(v1);
console.log(v2);
console.log(v1.toString())
console.log(v2.toString());