// parent Class
class Character {
    constructor (name, age, eyes, hair, loveCats = false, loveDogs) {
        this.legs = 2
        this.arms = 2
        this.eyes = eyes
        this.hair = hair 
        this.name = name
        this.age = age
        this.loveCats = loveCats 
        this.loveDogs = loveDogs || false
      }

    greet(otherCharacter){
        console.log(`Hello ${otherCharacter}!`);
    }
    smite(){
        console.log('I smite thee you vile person');
    }
    setHair(hairColor){
        this.hair = hairColor
    }
    classyGreeting(characterObj){
        console.log(`Greetings ${characterObj.name}!`);
    }
}

const me = new Character('Abe', 30, 'brown', 'black', true)
const you = new Character('Tim', 20, 'blue', 'red', false, true)

me.setHair('Yellow')

console.log(me);
console.log(you);

console.log(typeof me);
console.log(typeof you);

me.greet('Bob')
you.greet('Bob')
you.smite()

me.classyGreeting(you)
you.classyGreeting(me)


// function createTenCharacters(){
//     const arrOfCharacters = []
//     for(let i = 0; i <= 10; i++){
//         arrOfCharacters.push(new Character())
//     }
//     return arrOfCharacters
// }

// const chars = createTenCharacters()
// console.log(chars);


// SubClass

class Hobbit extends Character {
    constructor(name, age, eyes, hair, loveCats, loveDogs){
        super(name, age, eyes, hair, loveCats, loveDogs) // calls the constructor function from parent class
        this.skills = ["thievery", "speed", "willpower"] // <- array of skills
    }
    steal(){
        console.log(`Let's get away!`);
    }
    greet(otherCharacter){
        console.log(`Hello World ${otherCharacter}`);
    }
    smite(){
        super.smite() // calls the smite method from parent class
        this.steal() // extends the functionality
    }
    getNumberOfLegs(){
        console.log(this.legs);
    }
}

const frodo = new Hobbit('Frodo', 30, 'brown', 'black', true, true)
console.log(frodo);
const frodo1 = new Hobbit('Frodo', 30, 'brown', 'black')
console.log(frodo1);
// frodo.greet('Cohort27')
// frodo.smite()

const otherChar = new Character('Jack', 22, 'green', 'purple')
// otherChar.greet('Mel')
frodo.getNumberOfLegs()