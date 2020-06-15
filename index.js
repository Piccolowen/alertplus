const http = require('http')
const fs = require('fs')
const { runInNewContext } = require('vm')

var content = fs.readFileSync('index.html', 'utf-8')

const hostname = '127.0.0.1'
const port = 3300

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.statusMessage = 'OK'
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/') {
        res.write(content)
    }
    else if (req.url == '/alerts.js') {
        res.write(fs.readFileSync('alerts.js', 'utf-8'))
    }
    else if (req.url == '/alerts.json') {
        res.write(fs.readFileSync('alerts.json', 'utf-8'))
    }
    else {
        res.write('<b>404</b>: Not found!')
    }
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})