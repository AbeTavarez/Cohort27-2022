// Query Elements
const introP = document.getElementById('intro')
console.log(introP);

// Returns a HTML Collection
const subTitle = document.getElementsByClassName('sub-title')
console.log(subTitle);
//! will NOT work => subTitle.forEach((el) => console.log(el))

// Returns a NodeList
const subTitleCss = document.querySelectorAll('.sub-title')
console.log(subTitleCss);
subTitleCss.forEach((el) => console.log(el))

// Create a new array from a NodeList
const arrOfSubTitles = Array.from(subTitleCss)
console.log(arrOfSubTitles);

// ===== CRUD

// CREATE
const a = document.createElement('a')
a.setAttribute('href', 'http://www.yahoo.com')
console.dir(a);

// READ
const h1 = document.querySelector('h1')
console.log(h1.textContent);

// Update
const footer = document.querySelector('footer')
console.log(footer);
footer.style.backgroundColor = 'lightBlue'
footer.style.padding = '15px'

// Delete
const allP = document.querySelectorAll('p')
console.log(allP);
console.log(allP[2].textContent);
// Hides the element in the DOM
allP[2].style.display = 'none'

// Remove the element from the DOM
const parentEl = document.querySelector('footer')
// const child = parentEl.firstElementChild.nextElementSibling
const child = parentEl.lastElementChild
console.log(child);
// parentEl.removeChild(child)