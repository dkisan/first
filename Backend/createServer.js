const http = require('http')
const express = require('express')
// const handler = require('./routes')

const app = express()

app.use((req,res,next)=>{
    console.log('I am in the middleware')
    next()
})

app.use((req,res,next)=>{
    console.log("I am in another middleware")
    res.send('<h1>Hello from Express Js</h1>')
})



app.listen(4000)