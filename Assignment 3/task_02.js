// 2. Write a node.js program to create a server using http core module and create routes.
const http = require('http')

const server = http.createServer((request, response)=> {
    console.log("Your URL is: ",request.url) // show output in cmd
    response.writeHead(200, {'Content-Type':'text/html'})
    switch (request.url) {
        case '/':
            response.write(`
                <html>
                    <title> First Node.js </title>
                    <h2> Main Page </h2>
                </html>
            `)
            break;
        case '/about':
            response.write(`
                <html>
                    <title> First Node.js </title>
                    <h2> About us </h2>
                    <p> This is my first Node.js project </p>
                </html>
            `)
            break;
        case '/profile':
            response.write(`
                <html>
                    <title> First Node.js </title>
                    <h2> Profile Page </h2>
                    <p> This is the profile page </p>
                </html>
            `)
            break;
        default:
            response.write(`
                <html>
                    <title> First Node.js </title>
                    <h2> 404 Page not found </h2>
                </html>
            `)
            break;
    }
    response.end() 
})

const port = 3000
server.listen(port, () => {
    console.log(`Server Running ${port} port http://localhost:${port}`)
})