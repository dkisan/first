const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
// const handler = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/addproduct', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="prodName"><input type="number" name="prodSize"><button type="submit">Add Product</button></form>')
})
app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/addproduct')
})



app.use('/', (req, res, next) => {
    // console.log("I am in another middleware")
    res.send('<h1>Hello from Express Js</h1>')
})



app.listen(4000)