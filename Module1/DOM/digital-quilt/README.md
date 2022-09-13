### Digital Quilt Lab

#### Instructions

Let's build a digital quilt!:

![Digital Quilt](digial-quilt.png)

#### Add to the DOM with a loop

First goal: Add 10 divs to the DOM
- Write a for loop that counts from 1 to 10
- Create a square (Hint: use createElement) and add a .square class to give it shape
- Combine the two and generate many squares
- Append to the DOM each time the loop runs

#### Add to the DOM using a function that runs a loop

- Wrap the previous process in a function
- Run it multiple times for fun

#### Give the function an argument

- Provide the function with a parameter and argument, and run the loop that many times.
- Try running the loop 500 times.

#### Color the squares

- Let's give ourselve more control over the color selection by using rgb values for our colors

```
.square {
    background-color: rgb(25, 241, 84);
}
```
`rgb` stands for **red**, **green**, and **blue**. Each number is between 0 and 255, and determines how much red, how much green, and how much blue to blend.

- Use the `backgroundColor` property to set the `rgb` value.

#### Color each square with a random color

- Make a function that returns a string with random rgb values.
- We'll need to generate random values for red, green, and blue, and concatenate them into a return string.

```js
const randColorRGB = () => {
    // code in here
}
```
- Now use the return value of this function for the value of the `backgroundColor` property
*Note:* Since it is inside a loop, it will run each time the loop runs, giving us a random color each time.

#### Add text to each square

- Display the index value in each square from 1 to 500 using `.textContent`

#### **Bonus**

- See if you can dynamically change the size of the squares using JavaScript.
