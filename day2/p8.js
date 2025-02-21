const http = require('http');
const server=http.createServer(async (req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    const data=await fetch("https://fakestoreapi.com/products")
    const jsondata=await data.json();
    const myhtml=`<html>
    <head>
    <title>To Html Form</title>
    <style>
    .container{
    border: 1px black solid;
    background-color: peach;
    color: black;}
    </style>
    <body>
    <h1>Products</h1>
    ${
        jsondata.map((product)=>{
            return `<div class="container">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" height="200" width="150" alt="${product.title}">
            <p>${product.price}</p>
            <hr>
            </div>`
        })
    }
    `
    res.end(myhtml);
})
server.listen(9000,(err)=>{
    if(err)
        throw err;
    console.log('Server is running on port http://localhost:5000')
})