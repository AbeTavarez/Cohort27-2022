//* ===============Exercise 1: ===========================
// * Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.


// You can set these object properties to whatever values you want,
// as long as name is a string, legs and tails are numbers, and friends is an array.

//Only change code below this line

const myDog = {
    name: 'Luna',
    legs: 4,
    tails: 3,
    friends: ['spot', 'maggie', 'kipper']
}

// console.log( myDog.friends );
// console.log( myDog.friends[0] );
// console.log( myDog["friends"][1] );
// const valueToAccess = 'friends'
// console.log(myDog[valueToAccess]);

//* ===============Exercise 2: ===========================
//* Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
 //* Assign each variable its corresponding value from the object
 //Only change code below this line
   const hatValue = testObj.hat      // Change this line
   const shirtValue = testObj.shirt    // Change this line

//    console.log(hatValue);
//    console.log(shirtValue);




//* ===============Exercise 3: ===========================
//* Read the values of the properties 'an entree' and 'the drink' of testObj2 using bracket notation and assign them to two new variables entreeValue and drinkValue respectively.

  // Setup
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };

// Only change code below this line
const entreeValue = testObj2["an entree"]
const drinkValue = testObj2["the drink"]

// console.log(entreeValue);
// console.log(drinkValue);


//* ===============Exercise 4: ===========================
//* Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
 
  // Only change code below this line
  const playerNumber = 16 // Change this line
  const player = testObj3[playerNumber]   // Change this line
//   console.log(player);




  //* ===============Exercise 5: ===========================
  // Update the myDog2 object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

  // Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
 
// Only change code below this line
// console.log(myDog2);
myDog2.name = 'Happy Coder'
// myDog2["name"] = 'Happy Coder Too!'
// console.log(myDog2);



//* ===============Exercise 6: ===========================
//Add a bark property to myDog3 and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

// Only change code below this line
myDog3.dogSound = 'woof'
myDog3.bark = 'woof woof'
// console.log(myDog3);
// console.log(myDog3.bark);




//* ===============Exercise 7: ===========================
//Delete the tails property from myDog4. You may use either dot or bracket notation.

// Setup
const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
 
// Only change code below this line
// console.log(myDog4);
delete myDog4.tails
// delete myDog4["tails"]
// myDog4.tails = null
// console.log(myDog4);




//* ===============Exercise 8: ===========================
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];

// Only change code below this line

const newAlbum = {
    artist: 'Bill Joel 2',
    title: 'Piano man 2',
    release_year: 2000,
    formats: [ "CD", 'LP', "MP3"],
    gold: false
} 

myMusic.push(newAlbum)

// console.log(myMusic);


//* ===============Exercise 9: ===========================
//   Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
 
// Only change code below this line
const gloveBoxContents = myStorage.car.inside["glove box"]

// console.log(gloveBoxContents);











//* ===============Exercise 10: FINAL BOSS ===========================
// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.


const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
 

// Only change code below this line
const secondTree = myPlants[1].list[1]
const rose = myPlants[0].list[0]
console.log(secondTree);
console.log(rose);
console.log(myPlants);