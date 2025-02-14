const http=require('http');
const fs=require('fs/promises');

const server=http.createServer(async(req,res)=>{
    res.statuscode = 200;
    res.writeHead(200,{'content-type': 'text/html'});
    const data=await fs.readFile("./index.html");
    res.end(data);

});


server.listen(3000,(err)=>{
    console.log("server is running on port ");
});