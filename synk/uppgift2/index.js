/***********
* Method 1
************/

// let fs = require("fs");
// let readText = fs.readFileSync("myTextfile.txt", "utf-8")
// console.log(readText);
// console.log("Program Ended...");

/***********
* Method 2
************/
// Kod exempel: to handle errors, put it in a try catch block
const fs = require('fs');
try
{
    let readText = fs.readFileSync("myTextfile.txt", "utf-8")
    console.log(readText);
}
catch(_error)
{
    console.error(_error)
}
console.log("Program Ended...");

