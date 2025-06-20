/*5. Write a node.js program using http module to: 
1. Display a HTML form to take user input 
2. On form submission, capture user input from the post request. 
3. Write the capture input to a file on the server.
*/

const http = require('http');
const fs = require('fs');
const path = require('path');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    const fileName = path.join(__dirname,'input_data.html');
    const outputfilename = path.join(__dirname,"output.txt");
    res.setHeader('Content-Type','text/html')
    // res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.write("Server Error.")
            res.end()
        } else {
            // console.log(data.toString())
            res.write(data)
            res.end()
        }
    })
    if(req.url === "/submit_form" && req.method === "POST"){
        let data = "";
        req.on("data",(chunk)=>{
            console.log(chunk.toString())
            data += chunk.toString()
        })
        req.on("end",(end) => {
            console.log(queryString.parse(data))
            const inputdata = queryString.parse(data)
            res.write(`Form Submit<br> <a href="/"> Home Page </a> <br> Name: ${inputdata.name} <br> Student Code: ${inputdata.std_code} <br>`)
            fs.writeFile(outputfilename,`Form Submit <a href="/"> Home Page </a> Name: ${inputdata.name} <br> Student Code: ${inputdata.std_code} <br>`,()=>{

            })
            res.end()
        })
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
