const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
require('dotenv').config()


const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

// App settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))


app.get('/', (req, res) => {
    res.render('pages/HomePage')
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);

    // connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      // confirm that we have a connection to MongoDB
      mongoose.connection.once("open", () => {
        console.log("connected to mongo");
      });
})