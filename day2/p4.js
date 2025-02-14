const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const data = await fs.readFile("./data.json"); 
    const parsedData = JSON.parse(data); 

    const names = parsedData.users.map((user) => user.name); 
    res.end(JSON.stringify(names)); 
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
