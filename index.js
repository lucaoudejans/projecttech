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

app.get('/', (reg, res) => {
    res.send('<img src="/images/kat.jpeg" width="150">Hello world!')
})

app.get('/home/:user/', (req, res) => {
    console.log(`Input from ${req.params.user}`)
    res.send('<img src="/images/kat.jpeg" width="150"><h1>Hello ' + req.params.user + '</h1>')
})

app.listen(port, () => {
    console.log(`Hoi on port ${port}`)
})