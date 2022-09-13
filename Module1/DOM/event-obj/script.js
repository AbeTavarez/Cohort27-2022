
const commentBtn = document.querySelector('button')

commentBtn.addEventListener('click', function(e){
    // creates a new li element
    const li = document.createElement('li')
    // get the input from the DOM
    const input = document.querySelector('input')
    // sets the li textContent to the value of the input
    li.textContent = input.value
    // Append the new li to the ul
    document.querySelector('ul').appendChild(li)
    // set the input back to empty string
    input.value = ''
})