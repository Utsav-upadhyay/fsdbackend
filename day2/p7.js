const http =require('http');

const server =http.createServer(async(req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    if(req.url=='/home'){
        res.end("welcome to home page ");
    }
    else if(req.url=='/about'){
        res.end("welcome to about page ");
    }
    else if(req.url=='/contact'){
        res.end("welcome to contact us page ");
    }
    else{
        res.statusCode=404;
        res.end("page not found");
    }
})

server.listen(9000,()=>{
  
    console.log('server is running on porrt 9000')
})