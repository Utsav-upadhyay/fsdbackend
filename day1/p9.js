const fs = require('fs');

fs.rmdir('./myfolder',(err)=>{
    if(err) throw err;
    console.log('folder deleted successfully')
})