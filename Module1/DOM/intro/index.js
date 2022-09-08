// 1. Grab the element from the DOM
const h1 = document.getElementById("title");
// 2. Change the element properties
h1.style.backgroundColor = "orange";
h1.style.padding = "20px";
h1.style.color = "#fff";
h1.style.fontSize = "22px";
h1.style.textAlign = 'center'

// Using CSS Selectors to query an element
// selecting by a class .
const pEl = document.querySelector('.cool')
pEl.textContent = 'Comments for Today:'; // plain text
pEl.style.color = 'red'
pEl.style.fontWeight = 'bold'

console.log(pEl);
console.log(pEl.hasAttribute('src'))

// selecting by the id #
const superCoolP = document.querySelector('#super-cool')
superCoolP.innerHTML = 'Comments for <strong>Today</strong>'
// console.log(superCoolP);

// querySelector -> returns a single element
const h2 = document.querySelector('h2') 
// console.log(h2);

// querySelectorAll returns all matching elements
const allH2s = document.querySelectorAll('h2')
// console.log(allH2s);


// console.log(h1);
// console.dir(h1) // explore the properties of element

// setAttribute
const a = document.querySelector('a')
a.setAttribute('href', 'http://www.yahoo.com')

// hasAttribute
if (a.hasAttribute('href')){
    console.log('Thats true');
} else {
    console.log('No thats false');
}
console.log(a.hasAttribute('href'));

// getAttribute
const img =  document.querySelector('img')
console.log(img.getAttribute('src'));

img.setAttribute('width', '100px')

// ClassList
const bioP = document.querySelector('#bio')
bioP.classList.add('bioStyles', 'pad') // add new classes
bioP.classList.toggle('bioStyles') // toggle a class on/off
bioP.classList.toggle('bioStyles')
bioP.classList.remove('pad')
bioP.classList.replace('bioStyles', 'bioStyles1')
console.log(bioP.classList);


// Loop over nodelist

// console.log(document.querySelectorAll('.comment').length)

const liArr = document.querySelectorAll('.comment')
console.log(liArr);

for (let li of liArr){
    li.style.fontSize = '30px'
    // console.log(li.textContent);
}



// function addStyles(element) {
//     element.style.backgroundColor = "red";
//     element.style.padding = "20px";
//     element.style.color = "#fff";
//     element.style.fontSize = "64px";
//     return element;
// }

// addStyles(h1)