const fs = require('fs');

console.log("create a new directory");

fs.mkdir('myfolder',{recursive: true},(err)=>{
    if(err) {
        console.error("an error occurered : ",err);
        return;
        
    }
    console.log("directory created successfully");
});