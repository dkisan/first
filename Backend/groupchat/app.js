const express = require('express')
const bodyParser = require('body-parser')

const loginroute = require('./routes/route')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(loginroute)
app.use((req, res, next) => {
    res.send('<h1>Page Not Found</h1>')
})



app.listen(3000)