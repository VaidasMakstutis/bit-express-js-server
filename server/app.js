const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello/:vardas', (req, res) => {
    res.send(`Hello, ${req.params.vardas}`)
})

app.get('/sum/:a/:b', (req, res) => {
    res.send(`Sum: ${parseInt(req.params.a) + parseInt(req.params.b)}`)
})

app.get('/diff/:a/:b', (req, res) => {
    res.send(`Difference: ${parseInt(req.params.a) - parseInt(req.params.b)}`)
})

app.get('/multi/:a/:b', (req, res) => {
    res.send(`Multi: ${parseInt(req.params.a) * parseInt(req.params.b)}`)
})

app.get('/div/:a/:b', (req, res) => {
    res.send(`Div: ${parseInt(req.params.a) / parseInt(req.params.b)}`)
})

app.listen(port, () => {
  console.log(`App is working on: http://localhost:${port}`)
})