const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
// const handler = require('./routes')

const adminroute = require('./routes/adminRoute')
const shoproute = require('./routes/shopRoute')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/admin',adminroute)
app.use(shoproute)




app.use((req, res, next) => {
    res.send('<h1>Page Not found</h1>')
})



app.listen(4000)