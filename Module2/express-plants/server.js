// load modules
const express = require('express')

// init express app
const app = express()
const PORT = 3000

// DATA
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];

// Routes
app.get('/', (req, res) => {
    console.log(req.params);
    res.send('<h1>Welcome to Express Plants</h1>')
})



app.get('/plants', (req, res) => {
    res.send('Plants route')
})

app.get('/plants/:indexOfPlantsArray', (req, res) => {
    const {indexOfPlantsArray} = req.params;
    // console.log(req.params)
    // console.log(req.params.indexOfPlantsArray)
    res.send(plants[indexOfPlantsArray])
})

app.get('/fixed/:indexOfPlantsArray', (req, res) => {
    const {indexOfPlantsArray} = req.params

    if (plants[indexOfPlantsArray]){
        res.send(plants[indexOfPlantsArray])
    } else {
        res.send('Cannot find that index: ' +  indexOfPlantsArray)
    }
})



app.get('/hello/:firstname/:lastname', (req, res) => {
    // console.log(req.params);
    const {firstname, lastname} = req.params

    res.send(`Hello, ${firstname} ${lastname}`)
})

app.get('/login/:email/:password', (req, res) => {
    // console.log(req.params);
    const {email, password} = req.params

   // make a request to the db
   if (true){
       res.redirect('/home')
   } else {
    res.send('Please check your email and password')
   }

})

app.get('/products/electronics/kitchen/:id', (req, res) => {
    console.log(req.params);
})

// === Query Parameters

const dbUser = ['colton', 'abe', 'deja', 'chris']

app.get('/search/:username', (req, res) => {
    const { username } = req.params
    console.log(req.params);
    console.log(req.query);

    for (let user of dbUser){
        console.log(user);
        if (user === username){
            console.log(username);
           return res.send(`<h1>Welcome ${username}</h1>`)
        }else{
            console.log('User Not Found!!');
        }
    }

    res.send('<h1>User Not Found!!</h1>')

})
//  /howdy/abe?title=dev
// http://localhost:3000/howdy/abe?title=dev&experience=1
// http://localhost:3000/search/colton?location=ny&salary=100000&title=developer

app.get('/:color', (req, res)=> {
    res.send(req.params.color)
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})


// searchBtn.addEventListener('click', function(){
//     const textInput = document.getElementById('id')

//     fetch(`http://localhost:3000/search/${textInput.value}?location=${location}`)

// })