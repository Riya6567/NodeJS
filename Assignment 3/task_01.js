// 1. Write a node.js program to create a server using the http core module.
const http = require('http')
//console.log(http)

const server = http.createServer((request, response)=> {
    const date = Date();
    console.log("Your URL is: ",request.url) // show output in cmd
    response.end("Hello, Date: " + date + "\n") // send response back to client
})

//console.log(server)
const port = 3000
server.listen(port, () => {
    console.log(`Server Running ${port} port http://localhost:${port}`)
})