

const ul = document.querySelector('ul')
const li = document.querySelector('li')
const body = document.querySelector('body')
const btn = document.querySelector('button')

const handleClick = () => {
    console.log('handle click function');
}

// li.addEventListener('click', function (e) {
//     console.dir(e);
//     console.log(e.target);
// })

ul.addEventListener('click', function(e){
    console.log(e.target);

    // remove an event listener
    btn.removeEventListener('click', handleClick)
    // Stop an event from bubbling up
    e.stopPropagation()
})

// body.addEventListener('click', function(e){
//     console.log(e.target);
// })

btn.addEventListener('click', handleClick)