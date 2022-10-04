const express = require('express')
const morgan = require('morgan')
const fruits = require('./models/fruits')
const vegetablesArray = require('./models/vegetables')

// App init
const app = express()
const PORT = 3000

// Middleware
app.use(morgan('dev'))
// we need this middleware to read the data from post requests
app.use(express.urlencoded({extended:false}))
// create your own middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next()
})

// App settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// === Routes

// Root Route: testing
app.get('/', (req, res) => {
    res.send('Welcome')
})

// Index Route: get all fruits
app.get('/fruits', (req, res) => {
    // res.send(fruits)
    res.render('fruits/Index', {fruits: fruits})
})

//
app.post('/fruits', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else{
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})

// Render a form
app.get('/fruits/new', (req, res)=> {
    res.render('fruits/New')
})

// Show Route: show a single fruit
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    const {indexOfFruitsArray} = req.params
    // res.send(fruits[indexOfFruitsArray])
    res.render('fruits/Show', {
        fruit: fruits[indexOfFruitsArray],
        date: new Date().getFullYear()
    })
})



// ======== Vegies ====================

app.get('/vegetables', (req, res) => {
    res.render('vegetables/Index', {vegetables: vegetablesArray})
})

app.get('/vegetables/:indexOfVegetable', (req, res) => {
    const {indexOfVegetable} = req.params
    res.render('vegetables/Show', {vegetable: vegetablesArray[indexOfVegetable]})
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})