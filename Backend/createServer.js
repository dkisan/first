const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
// const handler = require('./routes')

const adminroute = require('./routes/adminRoute')
const shoproute = require('./routes/shopRoute')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/admin',adminroute)
app.use(shoproute)




app.use((req, res, next) => {
    res.sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(4000)