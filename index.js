// geheime bestanden in env
require('dotenv').config()

// express applicatie importeren
const express = require('express')
const app = express()

// express luistert naar de port. 4000 wordt weergegeven in de console
const port = 4000

// mongoDB connecten
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbName = 'testdatab'

// beide collections aanroepen
const db = client.db(dbName)
const form = db.collection('form')
const pets = db.collection('pets')

// ejs view engine importeren
app.set('view engine', 'ejs')

// ontleed form gegevens en kan deze nesten
app.use(express.urlencoded({extended: true}))

// middleware bedient de static bestanden. Alle verzoeken die beginnen met static worden 
// geleverd met bestanden uit de directory ./static
app.use('/static/', express.static('./static'));

// dynamische weergave wordt weergegeven
app.set('view engine', 'ejs')
// wordt gekeken voor view templates in de view map
app.set('views', 'view')

// hieronder alle pages

// het ejs bestand wordt aangeroepen en komt in html terug
app.get('/', function(req, res) {
    res.render('index.ejs');
  });

// wanneer user een bron opvraagt wat niet bestaat, komt er een error melding 
app.use((req, res) => {
  res.status(404).send("404, error")
})

// 4000 komt in de console om aan te geven dat de server luistert 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});

// crud 2x toepassen!! (find=read)
