const body = document.querySelector('body')
// 
const reset = () => {
    console.log('Clicked!!!');
}

const randNum = () => {
    console.log(Math.floor(Math.random() * 255));
}

// DOM Property way
const btn = document.getElementById('reset-btn')
btn.onclick = reset;
btn.onclick = randNum


// DOM Method
const btn2 = document.querySelector('#reset-btn-2')

btn2.addEventListener('click', reset)
btn2.addEventListener('click', randNum)

btn2.addEventListener('click', function(){
    body.style.backgroundColor = 'purple'
    window.alert('Cool!')
})