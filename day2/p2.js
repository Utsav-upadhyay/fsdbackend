const http=require('http');

const server=http.createServer((req,res)=>{
    res.statuscode = 200;
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('<h1 style="background-color: red; color: white;">Hello World</h1>');

});


server.listen(9000,(err)=>{
    if(err)
        console.log(err);
    
    console.log("server is running on port 9000");
});