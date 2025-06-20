/*
Create a new node.js project, name Calculator.
On the /home page (Route, show a welcome message and a link to the calculator page). 
On the /calculator page, display a form with two input fields and a sum button. 
When the user clicks the sum button they should be taken the calculator /calculator-result page 
which shows the sum of two numbers.
*/
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const renderHTML=(filename, res)=> {
        const filePath = path.join(__dirname, filename);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    if (req.method === 'GET') {
        if (req.url === '/') {
            renderHTML('home.html', res);
        } else if (req.url === '/calculator') {
            renderHTML('calculator.html', res);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page Not Found');
        }
    } else if (req.method === 'POST' && req.url === '/calculator-result') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = querystring.parse(body);
            const sum = parseFloat(data.num1) + parseFloat(data.num2);
            const resultHTML = `
                <!DOCTYPE html>
                <html>
                <head><title>Result</title></head>
                <body>
                    <h1>Sum Result</h1>
                    <p>The sum is: ${sum}</p>
                    <a href="/calculator">Back to Calculator</a>
                </body>
                </html>
            `;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(resultHTML);
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});