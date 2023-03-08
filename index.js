const express = require('express')
const app = express()
let ejs = require('ejs')
app.set('view engine', 'ejs')
app.use('/static/', express.static('./static'));

const port = 4000

app.use(express.static('static'))

app.get('/', (req,res) => {
  res.render('index')
})

app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', 'view')

app.use((req, res) => {
  res.status(404).send("404, error")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
