const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url
    if(url=='/'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Hello from my NodeJs Server</h1></body>')
        res.write('</html>')
        return res.end();
    }else if(url=='/home'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        return res.end();
    }else if(url=='/about'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to about us page</h1></body>')
        res.write('</html>')
        return res.end();
    }else if(url=='/node'){
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to my NodeJs Project</h1></body>')
        res.write('</html>')
        return res.end();
    }
})

server.listen(4000)