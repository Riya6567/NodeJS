const getMethod = (req, res)=> {
    res.writeHead(200, {'content-type':'text/html'})
    res.write(`VIEW Page for ${req.url}`)
}
const postMethod = (req, res)=> {
    res.writeHead(200, {'content-type':'text/html'})
    res.write(`NEW Page for ${req.url}`)
}
const putMethod = (req, res)=> {
    res.writeHead(200, {'content-type':'text/html'})
    res.write(`UPDATE Page for ${req.url}`)
}
const deleteMethod = (req, res)=> {
    res.writeHead(200, {'content-type':'text/html'})
    res.write(`DELETE Page for ${req.url}`)
}
module.exports = {
    getMethod,
    postMethod,
    putMethod,
    deleteMethod
}