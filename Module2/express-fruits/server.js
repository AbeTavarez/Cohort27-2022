const express = require('express')
const morgan = require('morgan')
const fruits = require('./models/fruits')

// App init
const app = express()
const PORT = 3000

// Middleware
app.use(morgan('dev'))

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
    res.render('Index', {fruits: fruits})
})

// Show Route: show a single fruit
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    const {indexOfFruitsArray} = req.params
    // res.send(fruits[indexOfFruitsArray])
    res.render('Show', {
        fruit: fruits[indexOfFruitsArray],
        date: new Date().getFullYear()
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})