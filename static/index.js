const express = require (`express`)
const app = express()

const port = 4000

app.use(express.static('static'))

app.get('/', (reg, res) => {
    res.send('<img src="/images/kat.jpeg" width="150">Hello world!')
})

app.get('/home/:user/', (req, res) => {
    console.log(`Input from ${req.params.user}`)
    res.send('<img src="/images/kat.jpeg" width="150"><h1>Hello World!' + req.params.user + '</h1>')
})

app.listen(port, () => {
    console.log(`Hoi on port ${port}`)
})