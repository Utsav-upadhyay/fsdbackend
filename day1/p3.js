const fs = require('fs');

const data = "i am new data file";

fs.writeFileSync("data.txt",data);
