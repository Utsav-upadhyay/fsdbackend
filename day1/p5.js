const fs = require('fs');
const data="i am i async write";

fs.writeFile("./data.txt",data,(err)=> {
    if(err)
        console.error("error writing file",err);
    else
      console.log("file written successfully");
})