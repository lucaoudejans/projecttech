// hidden in env
require('dotenv').config()

// import express application 
const express = require('express')
const app = express()

// express listens to the port. 4000 shows in console
const port = 4000

// connecting mongoDB connect
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbName = 'testdatab'

// trying to fix error in terminal
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });

// import ejs view engine 
app.set('view engine', 'ejs')

// parses form data and can nest it
app.use(express.urlencoded({extended: true}))

// middleware serves the static files. Alle requests that starts with /static will 
// be delivered with files from the directory ./static
app.use('/static/', express.static('./static'));

// dynamic view is being viewed
app.set('view engine', 'ejs')
// is looking for view templates in the view map
app.set('views', 'view')

// all pages

// calling ejs and returning in html
app.get('/', function(req, res) {
    res.render('index.ejs');
  });

// when an user is calling an unknow file, an error occurs
app.use((req, res) => {
  res.status(404).send("404, error")
})

// 4000 shows in the console to let know it works
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

// calling both collections 
const db = client.db(dbName)
const pets = db.collection('pets')[
    {
        name: 'Bibi',
        sort: 'cat',
        age: '0-2',
        personality: ['inquisitive', 'friendly']
    },
    {
        name: 'Dotty',
        sort: 'cat',
        age: '2-5',
        personality: ['playful', 'friendly']
    },
    {
        name: 'Benji',
        sort: 'dog',
        age: '0-2',
        personality: ['playful', 'inquisitive']
    },
    {
        name: 'Lola',
        sort: 'dog',
        age: '2-5',
        personality: ['friendly', 'playful']
    },
    {
        name: 'Luna',
        sort: 'bunny',
        age: '0-2',
        personality: ['friendly', 'playful']
    },
    {
        name: 'Pipi',
        sort: 'bunny',
        age: '2-5',
        personality: ['inquisitive', 'playful']
    }
]

// dingen uitproberen
// async function createlisting()

// // when the form is submitted, a function will check through the arrays for matches
// const filter = document.querySelector('filter');

// form.addEventListener('submit', function (event) {
//     event.prefentDefault();

//     const answer = {
//         sort: [],
//         age: [],
//         personality: []
//     };

// // getting the answers of the user
//     const sortInputs = document.querySelectorAll('input[type="checkbox"][name="sort"]:checked');
//     sortInputs.forEach(input => answer.sort.push(input.id));

//     const ageInputs = document.querySelectorAll('input[type="checkbox"][name="age"]:checked');
//     ageInputs.forEach(input => answers.age.push(input.id));

//     const personalityInputs = document.querySelectorAll('input[type="checkbox"][name="personality"]:checked');
//     personalityInputs.forEach(input => answers.personality.push(input.id));

// // find a match
// const pets = pets.find(pet => {
//     const isTypeMatch = answers.type.includes(pet.type);
//     const isAgeMatch = answers.age.includes(pet.age);
//     const isPersonalityMatch = pet.personality.every(trait => answers.personality.includes(trait));
//     return isSortMatch && isAgeMatch && isPersonalityMatch;
//   });

// // display the match
//     const matchResult = document.getElementById('match-result');
//     if (match) {
//     matchResult.textContent = `Your PawfectMatch is ${match.name}!`;
//     } else {
//     matchResult.textContent = 'Sorry, we could not find a match for your criteria.';
//     }




