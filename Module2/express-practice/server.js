// load express
const express = require('express')

// Create an instance of an express app
const app = express()

// The ROOT route
app.get('/', function(request, response){
    response.send('<h1>Hello Express!</h1>')
})

app.get('/posts', (req, res) => {
    res.send('<h3>Welcome to the Server</h3>')
})

app.get('/home', (req, res) => {
    res.send(`<h1>Home Page</h1>`)
})

app.post('/home', (req, res) => {
    res.send('<p>Post request</p>')
})

app.listen(3000, function(){
    console.log(`Server listening in port: 3000`);
})