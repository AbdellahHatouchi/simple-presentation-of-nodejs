// to usndersand how to use file system 
// (read data inside file ,  write data inside file and append data inside file, delete file  )

const fs = require("fs")
const fsp = require("fs").promises

// for read data of file exists
fs.readFile('./files/start.txt','utf8', (error, data) => {
    if (error) throw `the error is : ${error}`;
    console.log(data);
})
console.log('hi');
// // for write data inside file 
// fs.writeFile('./files/lorem.txt','this is the content of the lorem file \n created by use node js', (error) => {
//     if (error) throw error;
// })
// // for append data inside file 
// fs.appendFile('./files/start.txt','\n nice to meet you abdellah', (error) => {
//     if (error) throw error;
// })
// // for delete file exists
// fs.unlink('./files/test.txt', (error) => {
//     if (error) throw error;
// })

// ============================== Promise ===============================================
fsp.readFile('./files/start.txt',"utf8")
.then(data=>console.log(data))
.catch(err=>console.log(`the promise error is : ${err}`))

// ============================ ASYNC/AWAIT ===================================
const readData = async ()=>{
    let data = await fsp.readFile('./files/start.txt')
    console.log('read file by use async and await \n',data.toString());
}
readData()