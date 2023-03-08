const express = require (`express`)
const app = express()
let ejs = require('ejs')

const port = 4000

app.use(express.static('static'))


express()
.use(express.static('static'))
.use(express.urlencoded({extended: true}))
.set('view.engine', 'ejs')
.set('views', 'view')

// Templating engine
app.set('view engine', 'ejs')

app.use((reg, res) => {
    res.status(404).send("404, error")
})