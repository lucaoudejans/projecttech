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

// calling both collections 
const db = client.db(dbName)
const form = db.collection('form')
const pets = db.collection('pets')

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

// crud 2x toepassen!! (find=read)
