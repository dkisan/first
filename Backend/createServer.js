const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Debasish Kisan')
})

server.listen(4000)