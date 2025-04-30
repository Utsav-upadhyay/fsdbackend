const http = require('http');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');
let users = [];

if (fs.existsSync(dataFilePath)) {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    if (fileData) {
        users = JSON.parse(fileData);
    }
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    if (req.url === '/getdata' && req.method === 'GET') {
        res.end(JSON.stringify(users));
        return;
    } else if (req.url === '/setdata' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                console.log('Received data:', data);
                users.push(data);
                
                
                fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2));
                
                res.end(JSON.stringify({ message: 'Data received and saved successfully' }));
            } catch (error) {
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });
        return;
    }
    
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ error: 'Route not found' }));
});

server.listen(9100, () => {
    console.log('Server is running on port 9100');
});