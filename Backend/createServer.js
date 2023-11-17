const http = require('http')
const fs = require('fs')

const server = http.createServer( (req, res) => {
    const url = req.url
    if (url == '/') {
        let a = fs.readFileSync('message.txt').toString()
        console.log(a,'222')
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body>')
        res.write(`<p id="msgpara">${a}</p>`)
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    } else if (url == '/message' && req.method == 'POST') {
        const data = []
        req.on('data', (chunk) => {
            data.push(chunk)
        })

        req.on('end', () => {
            const parsedData = Buffer.concat(data).toString()
            const msg = parsedData.split('=')[1]
            fs.writeFileSync('message.txt', msg)
        })
        res.statusCode = 302
        res.setHeader('location', '/')
        return res.end();
    } else if (url == '/home') {
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        return res.end();
    } else if (url == '/about') {
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to about us page</h1></body>')
        res.write('</html>')
        return res.end();
    } else if (url == '/node') {
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to my NodeJs Project</h1></body>')
        res.write('</html>')
        return res.end();
    }
})

server.listen(4000)