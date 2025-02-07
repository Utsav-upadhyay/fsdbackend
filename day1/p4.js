const fs = require('fs');

fs.readFile("./data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error reading file",err);
        return;
    }
    console.log(data);
});


