/* Write a node.js program using http core module, 
handle routes and process different http methods (get, post, put, delete) on those routes.
*/
const http = require('http')
const reqMethod = require('./sos/method')
//console.log(reqMethod);

const server = http.createServer((req, res)=> {
    console.log(`Request URL: ${req.url} & Request Method: ${req.method}`);    
    switch (req.url) {
        case '/':
            res.writeHead(200, {'content-type':'text/html'})
            res.write('Main Page')
            break;
        case '/home':
            switch (req.method) {
                case "GET":
                    reqMethod.getMethod(req,res)
                    break;
                case "POST":
                    reqMethod.postMethod(req,res)
                    break;
                case "PUT":
                    reqMethod.putMethod(req,res)
                    break
                case "DELETE":
                    reqMethod.deleteMethod(req,res)
                    break
                default:
                    res.writeHead(404, {'content-type':'text/html'})
                    res.write('UNKNOWN Page')
                    break;
            }
            break;
        case '/profile':
            switch (req.method) {
                case "GET":
                    reqMethod.getMethod(req,res)
                    break;
                case "POST":
                    reqMethod.postMethod(req,res)
                    break;
                case "PUT":
                    reqMethod.putMethod(req,res)
                    break
                case "DELETE":
                    reqMethod.deleteMethod(req,res)
                    break
                default:
                    res.writeHead(404, {'content-type':'text/html'})
                    res.write('UNKNOWN Page')
                    break;
            }
            break;
        default:
            res.writeHead(404, {'content-type':'text/html'})
            res.write('404')
            break;
    }
    res.end()
})
server.listen(5000)