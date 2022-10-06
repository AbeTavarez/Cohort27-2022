const express = require("express");
const morgan = require("morgan");
const fruits = require("./models/fruits");
const vegetablesArray = require("./models/vegetables");
require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require('method-override')
const Fruit = require('./models/FruitModel')

// App init
const app = express();
const PORT = 3000;

// Middleware
app.use(morgan("dev"));
// we need this middleware to read the data from post requests
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
// create your own middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

// App settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// === Routes

// Root Route: testing
app.get("/", (req, res) => {
  res.send("Welcome");
});

// === READ ===
// Index Route: get all fruits
app.get("/fruits", (req, res) => {

  //Find All documents in db
  Fruit.find({}, (error, fruitsFromDB) => {
    if (error){
        console.log(error);
    }
    // console.log(fruitsFromDB);
      res.render("fruits/Index", { fruits: fruitsFromDB });
  })
});

// === CREATE ===
// Take in the data from create new fruit
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

// Using the model to create a new resource on the db
Fruit.create(req.body, (error, createdFruit) =>{
    if (error){
        console.log(error);
    }
    console.log(createdFruit)
    res.redirect("/fruits");
})
});

// Render a form
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

// === READ BY ID ===
// Show Route: show a single fruit
app.get("/fruits/:id", (req, res) => {
  const { id } = req.params;
  // res.send(fruits[indexOfFruitsArray])

  // get the dat from the db
  Fruit.findById(id, (error, foundFruit) => {
    if (error){
        console.log(error);
        res.status(403).send('Id not found')
    }
    // send the view with the data found on the db
    res.render("fruits/Show", {
        fruit: foundFruit,
        date: new Date().getFullYear(),
      });
  })

});

app.delete('/fruits/:id', (req, res) => {
  const {id} = req.params;

  // delete the fruit from db
  Fruit.findByIdAndRemove(id, (error, data) => {
    console.log('HEREEEE', data);
    if (error){
      console.log(error);
      res.status(403).send('Bad request')
    }
    res.redirect('/fruits')
  })
})

app.get('/fruits/:id/edit', (req, res) => {
  const {id} = req.params
  // find the fruit in the db using the id
  Fruit.findById(id, (error, foundFruit) => {
    if (error){
      console.log(error);
      res.status(403).send('Id not found')
    }
    // render the view and pass the data from the fruit
    res.render('fruits/Edit', {fruit: foundFruit})

  })

})

app.put('/fruits/:id', (req, res) => {
  const {id}= req.params
  if (req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }

  Fruit.findByIdAndUpdate(id, req.body, (error, updatedFruit) => {
    if (error){
      console.log(error);
      res.status(403).send('Cannot update')
    }
    res.redirect(`/fruits/${id}`)
  })
})





// ======== Vegies ====================

app.get("/vegetables", (req, res) => {
  res.render("vegetables/Index", { vegetables: vegetablesArray });
});

app.get("/vegetables/:indexOfVegetable", (req, res) => {
  const { indexOfVegetable } = req.params;
  res.render("vegetables/Show", {
    vegetable: vegetablesArray[indexOfVegetable],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });
});
