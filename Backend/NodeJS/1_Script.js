
const fs = require('fs');
//Write File 
// fs.writeFile("Hey.txt","  I am learning node.js",function(err){
//     if(err) console.error(err)
//     else console.log("done")    
// })

//Append File
// fs.appendFile("Hey.txt","  I am learning node.js",function(err){
//     if(err) console.error(err)
//     else console.log("done")    
// })

//Rename File
// fs.rename("Hey.txt","Hello.txt" ,function(err){
//     if(err) console.error(err)
//     else console.log("done")    
// })

//Copy File
// fs.copyFile("Hello.txt","./MyFolder/Copy.txt",function(err){
//     if(err) console.error(err)
//     else console.log("done")
// })

//Unlink / Delete File
// fs.unlink("Hello.txt",function(err){
//     if(err) console.error(err)
//     else console.log("done")
// })

//Remove folder /rm
// fs.rm("./Copy",{recursive:true},(err)=>{
//     if(err) console.error(err)
//     else console.log("done")
// })

//Create the Folder
// fs.mkdir("MyFolder", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("Folder Created");
// });

//Read File
// fs.readFile("Hey.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
// });

//Read Folder
// fs.readdir("./MyFolder", (err, files) => {

//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files);

// });

// To check the File is exist or not
fs.access("Hey.txt", (err) => {
    if (err) {
        console.log("File does not exist");
    } else {
        console.log("File exists");
    }
});